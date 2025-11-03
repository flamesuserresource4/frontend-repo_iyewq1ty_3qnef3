import { Shield, Lock, Zap, Layers, Headset } from 'lucide-react';

const services = [
  {
    title: 'Automation',
    desc: 'Hands-free reminders, scheduling, and intake flows that reduce front-desk load.',
    icon: Zap,
  },
  {
    title: 'Privacy',
    desc: 'Data handling with strict role-based access and audit-friendly logs.',
    icon: Shield,
  },
  {
    title: 'Security',
    desc: 'Encryption in transit and at rest, with robust authentication controls.',
    icon: Lock,
  },
  {
    title: 'Integration',
    desc: 'Connect with leading PMS systems and communication tools.',
    icon: Layers,
  },
  {
    title: '24/7 Support',
    desc: 'Round-the-clock assistance for mission-critical operations.',
    icon: Headset,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-black">Services</h2>
          <p className="text-sm text-gray-600">Premium, minimal, enterprise-grade</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow-sm transition group-hover:scale-105">
                <Icon size={18} />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-black">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
