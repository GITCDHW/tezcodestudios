import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TezCodeStudios - Rapid Software Development Agency',
  description: 'MVPs in days, not months. Gen-Z speed and creativity for your startup. Specializing in SaaS, AI, and custom software.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      </body>
    </html>
  );
}
