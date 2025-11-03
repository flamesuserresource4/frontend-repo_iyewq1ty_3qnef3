export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="mb-2 text-sm uppercase tracking-wide text-gray-700">AI Automation for Modern Dental Clinics</p>
        <h1 className="mx-auto mb-3 max-w-3xl text-3xl font-semibold leading-tight text-black md:text-4xl">
          Velodent streamlines front-desk operations, patient onboarding, and recall systems using safe, compliant AI.
        </h1>
        <div className="mt-5">
          <a href="#contact" className="inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-lg">Book Now</a>
        </div>
        <div className="mt-10">
          <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&rel=0&controls=1&showinfo=0&playsinline=1"
              title="Velodent Demo"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
