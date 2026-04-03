// src/app/page.tsx
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
// import Contact from '@/components/sections/Contact';
// import Location from '@/components/sections/Location';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      {/* <Contact />
      <Location /> */}
    </main>
  );
}