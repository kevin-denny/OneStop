import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/94766191941"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl flex items-center justify-center group"
            aria-label="Contact on WhatsApp"
        >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75 group-hover:opacity-0"></div>
            <FaWhatsapp className="w-8 h-8 relative z-10" />
        </a>
    );
};

export default WhatsAppButton;
