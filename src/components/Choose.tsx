
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Choose = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    startDate: '',
    endDate: '',
    plans: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    setShowEnquiry(false);
  };

  return (
    <div id="packages" className="bg-white py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-[#0085dd] font-['Cormorant_Garamond'] text-5xl font-semibold leading-tight">
          Choose your way to Travel
        </h1>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {/* Backpacking Trips */}
        <div 
          className="flex-[1_1_calc(33.33%-1rem)] max-w-[calc(33.33%-1rem)] h-[600px] bg-cover bg-center rounded-lg cursor-pointer relative group"
          style={{ backgroundImage: "url('/img/IMG_1467.JPG')" }}
          onClick={() => navigate('/packages')}
        >
          <div className="border-2 border-white w-[90%] h-[90%] flex flex-col justify-end items-start p-4 absolute bottom-5 left-5 overflow-hidden">
            <h1 className="text-white text-4xl font-semibold leading-tight mb-4">
              Backpacking Trips
            </h1>
            <p className="text-white text-sm font-medium h-0 overflow-hidden transition-all duration-500 group-hover:h-16">
              Discover budget-friendly backpacking trips with adventure-filled
              itineraries for travelers and nature lovers.
            </p>
          </div>
        </div>

        {/* Bespoke */}
        <div 
          className="flex-[1_1_calc(33.33%-1rem)] max-w-[calc(33.33%-1rem)] h-[600px] bg-cover bg-center rounded-lg cursor-pointer relative group"
          style={{ backgroundImage: "url('/img/IMG_2323.JPG')" }}
          onClick={() => navigate('/bespoke')}
        >
          <div className="border-2 border-white w-[90%] h-[90%] flex flex-col justify-end items-start p-4 absolute bottom-5 left-5 overflow-hidden">
            <h1 className="text-white text-4xl font-semibold leading-tight mb-4">
              Bespoke
            </h1>
            <p className="text-white text-sm font-medium h-0 overflow-hidden transition-all duration-500 group-hover:h-16">
              Choose your way to explore by crafting personalized itineraries that
              cater to your unique preferences
            </p>
          </div>
        </div>

        {/* Cloudnine Experience */}
        <div 
          className="flex-[1_1_calc(33.33%-1rem)] max-w-[calc(33.33%-1rem)] h-[600px] bg-cover bg-center rounded-lg cursor-pointer relative group"
          style={{ backgroundImage: "url('/img/IMG_0788.JPG')" }}
          onClick={() => navigate('/packages')}
        >
          <div className="border-2 border-white w-[90%] h-[90%] flex flex-col justify-end items-start p-4 absolute bottom-5 left-5 overflow-hidden">
            <span className="bg-[#0085dd] text-white py-2 px-5 rounded-full font-['Jost'] text-sm font-semibold uppercase mb-4 inline-block w-fit">
              Exclusive Itineraries
            </span>
            <h1 className="text-white text-4xl font-semibold leading-tight mb-4">
              Cloudnine Experience
            </h1>
            <p className="text-white text-sm font-medium h-0 overflow-hidden transition-all duration-500 group-hover:h-16">
              Embark on a Cloudnine experience filled with thrilling adventures,
              breathtaking landscapes, and unforgettable journeys
            </p>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex justify-center items-center z-[99999]">
          <div className="w-4/5 max-w-2xl bg-white rounded-lg p-8 max-h-[90vh] overflow-y-auto">
            <h1 className="text-4xl font-semibold leading-tight mb-8 text-black font-['Cormorant_Garamond']">
              Enquire Now
            </h1>
            
            <div className="space-y-6">
              <div>
                <p className="text-black font-['Cormorant_Garamond'] text-xl font-semibold mb-2">Your Name*</p>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-full py-4 px-6 text-black outline-none"
                />
              </div>
              
              <div>
                <p className="text-black font-['Cormorant_Garamond'] text-xl font-semibold mb-2">Your Email*</p>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-full py-4 px-6 text-black outline-none"
                />
              </div>
              
              <div>
                <p className="text-black font-['Cormorant_Garamond'] text-xl font-semibold mb-2">Destination*</p>
                <input 
                  type="text" 
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-full py-4 px-6 text-black outline-none"
                />
              </div>
              
              <div>
                <p className="text-black font-['Cormorant_Garamond'] text-xl font-semibold mb-2">Start Date*</p>
                <input 
                  type="date" 
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-full py-4 px-6 text-black outline-none"
                />
              </div>
              
              <div>
                <p className="text-black font-['Cormorant_Garamond'] text-xl font-semibold mb-2">End Date*</p>
                <input 
                  type="date" 
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-full py-4 px-6 text-black outline-none"
                />
              </div>
              
              <div>
                <p className="text-black font-['Cormorant_Garamond'] text-xl font-semibold mb-2">Let us know about your trip plans! (optional)</p>
                <textarea 
                  name="plans"
                  value={formData.plans}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-3xl py-4 px-6 text-black outline-none min-h-24"
                />
              </div>
              
              <div className="flex justify-between items-center">
                <button 
                  onClick={handleSubmit}
                  className="font-['Jost'] text-sm font-semibold uppercase bg-black rounded-full py-4 px-10 text-white cursor-pointer"
                >
                  Submit
                </button>
                <button 
                  onClick={() => setShowEnquiry(false)}
                  className="font-['Jost'] text-sm font-semibold uppercase bg-black rounded-full py-4 px-10 text-white cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Choose;
