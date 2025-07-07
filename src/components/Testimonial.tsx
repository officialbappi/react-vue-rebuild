
import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Mumbai",
      text: "Amazing experience with Cloudnine Northeast! The team was professional and the itinerary was perfectly planned.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "Best travel agency for Northeast India. Highly recommended for authentic local experiences.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Bangalore",
      text: "Unforgettable journey through Meghalaya. The guides were knowledgeable and friendly.",
      rating: 5
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#0085DD] font-['Cormorant_Garamond'] text-5xl font-semibold leading-tight mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 font-['Jost'] text-lg">
            Read genuine reviews from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 font-['Jost'] text-base mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <h4 className="font-['Jost'] font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
