import { useState } from 'react';

const faqs = [
  {
    q: 'How does Velodent improve patient recall rates?',
    a: 'Automated, compliant reminders via SMS and email with optimal timing windows increase response rates without adding front-desk workload.'
  },
  {
    q: 'Is Velodent HIPAA compliant?',
    a: 'Yes. We implement strict access controls, encryption, and audit logs to support HIPAA-aligned operations.'
  },
  {
    q: 'Can Velodent integrate with our practice management software?',
    a: 'Velodent integrates with leading PMS systems. Our team assists with secure, guided setup.'
  },
  {
    q: 'What support is available?',
    a: '24/7 monitoring and priority response SLAs ensure your clinic remains operational.'
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="mb-6 text-center text-2xl font-semibold text-black">Frequently Asked Questions</h2>
        <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {faqs.map((item, idx) => (
            <details
              key={item.q}
              open={open === idx}
              onClick={(e) => {
                e.preventDefault();
                setOpen(open === idx ? -1 : idx);
              }}
              className="group"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4">
                <span className="text-sm font-medium text-black">{item.q}</span>
                <span className="ml-4 rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-700 transition group-open:rotate-45">+</span>
              </summary>
              <div className="px-4 pb-4 text-sm leading-relaxed text-gray-700">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
