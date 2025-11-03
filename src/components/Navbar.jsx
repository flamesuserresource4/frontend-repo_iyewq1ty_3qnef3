import { useState } from 'react';

function LoginModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
        <h3 className="mb-4 text-center text-xl font-semibold text-black">Sign in to Velodent CRM</h3>
        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-gray-700">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black placeholder-gray-400 focus:border-black focus:outline-none"
              placeholder="you@clinic.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-700">Password</label>
            <input
              type="password"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black placeholder-gray-400 focus:border-black focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <button type="button" className="text-gray-600 hover:text-black" onClick={() => alert('Password reset flow coming soon.')}>Forgot password?</button>
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              alert('Signed in. Redirecting to Velodent CRM…');
            }}
            className="w-full rounded-md bg-black px-4 py-2 font-medium text-white shadow-sm transition hover:shadow-lg"
          >
            Sign In
          </button>
        </form>
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600 shadow-sm transition hover:shadow"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      <li><a href="#home" className="text-sm text-gray-800 transition hover:text-black">Home</a></li>
      <li><a href="#about" className="text-sm text-gray-800 transition hover:text-black">About</a></li>
      <li><a href="#services" className="text-sm text-gray-800 transition hover:text-black">Services</a></li>
      <li><a href="#cases" className="text-sm text-gray-800 transition hover:text-black">Case Studies</a></li>
      <li><a href="#testimonials" className="text-sm text-gray-800 transition hover:text-black">Testimonials</a></li>
      <li><a href="#faq" className="text-sm text-gray-800 transition hover:text-black">FAQ</a></li>
      <li><a href="#contact" className="text-sm text-gray-800 transition hover:text-black">Contact / Book Now</a></li>
      <li>
        <button
          onClick={() => setOpen(true)}
          className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition hover:shadow-md"
        >
          Dashboard
        </button>
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-lg font-semibold tracking-tight text-black">Velodent</a>
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <button
          className="md:hidden rounded-md border border-gray-300 px-3 py-2 text-sm text-black"
          onClick={() => setMobile((s) => !s)}
        >
          Menu
        </button>
      </nav>
      {mobile && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
          <NavLinks />
        </div>
      )}
      <LoginModal open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
