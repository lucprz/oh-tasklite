'use client';
import Dashboard from '@/components/dashboard';
import Footer from '@/components/footer';
import Navbar from '@/components/navBar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Dashboard />
      <Footer />
    </main>
  );
}
