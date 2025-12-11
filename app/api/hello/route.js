import { firestore } from '@/lib/firebase/admin';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const docRef = await firestore.collection('inquiries').add({
      name,
      email,
      message,
      timestamp: new Date(),
    });

    console.log('Document written with ID: ', docRef.id);

    return NextResponse.json({ message: 'Inquiry submitted successfully!', id: docRef.id }, { status: 200 });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json({ error: 'Failed to submit inquiry.' }, { status: 500 });
  }
}
