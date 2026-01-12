const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-brand-black via-gray-900 to-brand-black text-brand-white min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange opacity-80 rounded-full blur-3xl -z-10"></div>

      <div className="absolute top-20 right-10 w-3 h-3 bg-brand-orange rounded-full opacity-40"></div>
      <div className="absolute top-40 right-20 w-5 h-5 bg-brand-orange rounded-full opacity-50"></div>
      <div className="absolute bottom-32 left-10 w-6 h-6 bg-brand-orange rounded-full opacity-60"></div>
      <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-brand-orange rounded-full opacity-40"></div>

      <div className="absolute top-1/4 left-5 w-20 h-20 border border-brand-orange opacity-10 rounded-2xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-brand-orange opacity-5 rounded-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-brand-orange bg-opacity-10 border border-brand-orange border-opacity-20 rounded-full">
            <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
            <span className="text-sm font-medium text-brand-orange">Digital Solutions</span>
          </div>

          <h1 className="heading-1 mb-6 leading-tight">
            Your One Stop<br />
            <span className="text-brand-orange">Solution</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed max-w-2xl">
            We deliver comprehensive project management and digital solutions that transform your business. From strategic planning to flawless execution, we're your trusted partner for sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="btn-primary text-lg inline-flex items-center justify-center gap-2 group"
            >
              Get Started
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-brand-white opacity-50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
