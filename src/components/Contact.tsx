
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const socialMedia = [
    {
      name: "Instagram",
      image: "/img/insta.png",
      url: "https://www.instagram.com/cloudninenortheast/"
    },
    {
      name: "Facebook", 
      image: "/img/facebook.png",
      url: "https://www.facebook.com/CloudnineNortheast"
    },
    {
      name: "WhatsApp",
      image: "/img/whatsapp.png", 
      url: "https://wa.me/919706455230"
    }
  ];

  return (
    <div className="bg-black py-8 text-center">
      <div className="flex flex-wrap justify-center items-start w-4/5 mx-auto pt-8 gap-5">
        
        {/* About Section */}
        <div className="flex-1 max-w-[30%] flex justify-center items-center text-left">
          <div>
            <p className="text-[#0085dd] font-['Jost'] text-xl font-medium uppercase mb-4">About</p>
            <h1 
              className="text-white font-['Jost'] text-lg font-semibold leading-tight cursor-pointer hover:text-[#fc6220] transition-colors mb-2"
              onClick={() => navigate('/terms')}
            >
              Terms and Conditions
            </h1>
            <h1 
              className="text-white font-['Jost'] text-lg font-semibold leading-tight cursor-pointer hover:text-[#fc6220] transition-colors mb-2"
              onClick={() => navigate('/privacy')}
            >
              Privacy Policy  
            </h1>
            <h1 
              className="text-white font-['Jost'] text-lg font-semibold leading-tight cursor-pointer hover:text-[#fc6220] transition-colors"
              onClick={() => navigate('/cancellation')}
            >
              Cancellation and Refund Policy
            </h1>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex-1 max-w-[30%] flex justify-center items-center text-left">
          <div>
            <p className="text-[#0085dd] font-['Jost'] text-xl font-medium uppercase mb-4">Call Us</p>
            <h1 className="text-white font-['Jost'] text-lg font-semibold leading-tight mb-4">+919706455230</h1>
            <p className="text-[#0085dd] font-['Jost'] text-xl font-medium uppercase mb-4">Email Us</p>
            <h1 className="text-white font-['Jost'] text-lg font-semibold leading-tight">admin@cloudninenortheast.com</h1>
          </div>
        </div>

        {/* Logo and Social Section */}
        <div className="flex-1 max-w-[30%] flex flex-col items-center">
          <img className="w-44 max-w-full mb-6" src="/img/logo-white.png" alt="Cloudnine Northeast" />
          <div className="flex justify-center flex-wrap gap-4">
            {socialMedia.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:-translate-y-1 hover:opacity-80"
              >
                <img 
                  className="w-8 h-8 object-contain rounded-lg transition-all duration-300 hover:brightness-125" 
                  src={social.image} 
                  alt={social.name} 
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-8 border-t border-gray-800">
        <p className="text-gray-400 font-['Jost'] text-sm">
          © 2024 Cloudnine Northeast. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
