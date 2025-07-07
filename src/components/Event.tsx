
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Event = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Cars & Bike Rental",
      image: "/img/stylish-elegant-woman-car-salon.jpg",
      route: "/cars"
    },
    {
      title: "Travel Assistance",
      image: "/img/accessories.jpg",
      route: "/travel-accessories"
    },
    {
      title: "Events",
      image: "/img/Screenshot 2025-06-20 at 9.29.27 AM.png",
      route: "/events"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-right mb-12">
          <p className="text-[#0085DD] font-['Jost'] text-base font-medium uppercase mb-2">
            Explore our Exclusive Services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col h-[550px]">
              <div className="h-20 px-4 pb-4">
                <h1 className="text-[#0085DD] font-['Jost'] text-2xl font-medium leading-tight">
                  {service.title}
                </h1>
              </div>
              <div 
                className="flex-1 rounded-2xl bg-cover bg-center cursor-pointer hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url('${service.image}')` }}
                onClick={() => navigate(service.route)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
