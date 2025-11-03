import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import FAQ from './components/FAQ.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="mb-3 text-2xl font-semibold">About Velodent</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-gray-700">
              Velodent delivers premium automation for modern dental clinics. Our focus is on compliant AI that reduces administrative burden while improving patient experience.
            </p>
          </div>
        </section>

        <Services />

        <section id="cases" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-2xl font-semibold">Case Studies</h2>
              <p className="text-sm text-gray-600">Real outcomes from real clinics</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold">Urban Dental Group</h3>
                <p className="mb-4 text-sm text-gray-700">42% faster intake, 31% increase in recall adherence. Automated follow-ups reduced staff time by 18 hrs/week.</p>
                <a href="#" className="text-sm font-medium underline underline-offset-4 hover:no-underline">Read More</a>
              </article>
              <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold">Harbor Family Dentistry</h3>
                <p className="mb-4 text-sm text-gray-700">No-show rate down 26% with smart reminders. Insurance pre-checks reduced claim rejections by 15%.</p>
                <a href="#" className="text-sm font-medium underline underline-offset-4 hover:no-underline">Read More</a>
              </article>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="mb-8 text-2xl font-semibold">What our clients say</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <blockquote className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-800">“Our front desk is finally proactive, not reactive. Patients love the smooth communication.”</p>
                <footer className="mt-3 text-xs text-gray-600">Practice Manager, Urban Dental Group</footer>
              </blockquote>
              <blockquote className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-800">“Velodent paid for itself in two months via recovered appointments.”</p>
                <footer className="mt-3 text-xs text-gray-600">Owner, Harbor Family Dentistry</footer>
              </blockquote>
              <blockquote className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-800">“Setup was quick, security standards were on point, and support is excellent.”</p>
                <footer className="mt-3 text-xs text-gray-600">Operations Lead, Lakeside Smiles</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <FAQ />

        <section id="contact" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-6 flex items-end justify-between">
              <h2 className="text-2xl font-semibold">Book Now</h2>
              <p className="text-sm text-gray-600">Schedule a live demo</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
                <iframe
                  title="Velodent Booking"
                  src="https://cal.com/embed"
                  className="h-full w-full"
                  frameBorder="0"
                  allow="fullscreen"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-100 bg-white py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Velodent. All rights reserved.
      </footer>
    </div>
  );
}
