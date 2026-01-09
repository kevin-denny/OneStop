const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-brand-black text-brand-white section-spacing min-h-screen flex items-center">
      <div className="container-custom">
        <div className="max-w-4xl">
          <h1 className="heading-1 mb-6">
            Your One Stop Solution
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed">
            We deliver comprehensive project management and digital solutions that transform your business. From strategic planning to flawless execution, we're your trusted partner for sustainable growth.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-primary text-lg"
          >
            Get Started
          </button>
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
