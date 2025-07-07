
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState<any>({});

  // Mock data for demonstration - replace with actual API call
  useEffect(() => {
    // Simulate API call
    const mockPackages = {
      package1: { id: 1, name: "Meghalaya Adventure", photo: "beautiful-rainbow-nature.jpg" },
      package2: { id: 2, name: "Assam Tea Gardens", photo: "cascade-boat-clean-china-natural-rural.jpg" },
      package3: { id: 3, name: "Arunachal Expedition", photo: "fresh-travel-vietnam-natural-china-stone.jpg" },
      package4: { id: 4, name: "Nagaland Culture", photo: "thi-lo-su-tee-lor-su-tak-province-thi-lo-su-waterfall-largest-waterfall-thailand.jpg" },
      package5: { id: 5, name: "Manipur Heritage", photo: "tourists-taking-photos-beautiful-scenery-skiing-around-deogyusan.jpg" },
      package6: { id: 6, name: "Tripura Trails", photo: "vacation-stone-vietnam-fresh-green-china.jpg" },
      package7: { id: 7, name: "Sikkim Peaks", photo: "beautiful-rainbow-nature.jpg" },
    };
    setPackages(mockPackages);
  }, []);

  const handlePackageClick = (packageId: number) => {
    navigate(`/blog/${packageId}`);
  };

  return (
    <div className="bg-white py-12">
      <div className="flex flex-wrap justify-around items-start pt-20">
        {/* Large left package */}
        <div 
          className="flex-[0_0_24.5%] max-w-[24.5%] h-[400px] bg-center bg-cover bg-no-repeat flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(/img/${packages.package1?.photo})` }}
          onClick={() => handlePackageClick(packages.package1?.id)}
        >
          <h1 className="text-white font-['Cormorant_Garamond'] text-4xl font-semibold text-center">
            {packages.package1?.name}
          </h1>
        </div>

        {/* Center column with 2 packages */}
        <div className="flex-[0_0_24.5%] max-w-[24.5%] flex flex-wrap items-center gap-2.5 h-[400px]">
          <div 
            className="flex-[0_0_100%] max-w-full h-[195px] bg-center bg-cover bg-no-repeat flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(/img/${packages.package2?.photo})` }}
            onClick={() => handlePackageClick(packages.package2?.id)}
          >
            <h1 className="text-white font-['Cormorant_Garamond'] text-4xl font-semibold text-center">
              {packages.package2?.name}
            </h1>
          </div>
          <div 
            className="flex-[0_0_100%] max-w-full h-[195px] bg-center bg-cover bg-no-repeat flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(/img/${packages.package3?.photo})` }}
            onClick={() => handlePackageClick(packages.package3?.id)}
          >
            <h1 className="text-white font-['Cormorant_Garamond'] text-4xl font-semibold text-center">
              {packages.package3?.name}
            </h1>
          </div>
        </div>

        {/* Another center column with 2 packages */}
        <div className="flex-[0_0_24.5%] max-w-[24.5%] flex flex-wrap items-center gap-2.5 h-[400px]">
          <div 
            className="flex-[0_0_100%] max-w-full h-[195px] bg-center bg-cover bg-no-repeat flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(/img/${packages.package4?.photo})` }}
            onClick={() => handlePackageClick(packages.package4?.id)}
          >
            <h1 className="text-white font-['Cormorant_Garamond'] text-4xl font-semibold text-center">
              {packages.package4?.name}
            </h1>
          </div>
          <div 
            className="flex-[0_0_100%] max-w-full h-[195px] bg-center bg-cover bg-no-repeat flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(/img/${packages.package5?.photo})` }}
            onClick={() => handlePackageClick(packages.package5?.id)}
          >
            <h1 className="text-white font-['Cormorant_Garamond'] text-4xl font-semibold text-center">
              {packages.package5?.name}
            </h1>
          </div>
        </div>

        {/* Large right package */}
        <div 
          className="flex-[0_0_24.5%] max-w-[24.5%] h-[400px] bg-center bg-cover bg-no-repeat flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(/img/${packages.package6?.photo})` }}
          onClick={() => handlePackageClick(packages.package6?.id)}
        >
          <h1 className="text-white font-['Cormorant_Garamond'] text-4xl font-semibold text-center">
            {packages.package6?.name}
          </h1>
        </div>
      </div>

      {/* Enquiry section */}
      <div className="text-center mt-16">
        <p className="text-white font-['Jost'] text-xs font-medium uppercase">
          Enquiry for Holidays and B2B Packages
        </p>
        <h1 className="text-white font-['Cormorant_Garamond'] text-5xl font-medium leading-tight">
          Fill the Details to get your Best Quote
        </h1>
      </div>
    </div>
  );
};

export default Blogs;
