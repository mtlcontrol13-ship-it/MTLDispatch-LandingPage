import React from "react";
import { IMAGES } from "../../assets/Images";

const Hero = () => {
  return (
    <div className="px-4 md:py-24 py-12 ">
      {/* parent  */} 
      <div className="2xl:max-w-7xl xl:max-w-5xl flex md:flex-row flex-col items-center justify-evenly w-full mx-auto gap-12">
        {/* Images Section */}
        <div className="flex md:flex-row flex-col relative w-full max-w-xl">
<div className="hidden md:block bg-(--primary-yellow-color) h-72 w-64 rounded-md absolute -top-8 -left-12 z-0" />
          
          {/* Main Dashboard Image */}
<div className="w-full md:w-[420px] h-72 md:h-96 z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
              alt="Dashboard Analytics" 
              className="w-full h-full object-cover"
            />
          </div>
          
       <div className="hidden md:block">
  <img
    src={IMAGES.AboutShape}
    alt="about shape"
    className="absolute w-full -top-12 left-1/3"
  />
</div>

          
          {/* Secondary Tracking Image */}
<div className="hidden md:block w-64 h-80 absolute right-4 md:right-12 top-24 md:top-16 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=600&q=80" 
              alt="Driver Tracking Map" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6 max-w-2xl">
          <h3 className="text-black bg-gray-200 w-28 rounded-full px-4 text-sm py-1.5 font-medium">
            ABOUT US
          </h3>
          <h1 className="text-3xl md:text-2xl font-bold leading-tight text-gray-900">
            Powerful Dashboard Built for Chauffeur Companies
          </h1>
          <p className="md:text-lg text-md text-gray-600 leading-relaxed">
            Transform your chauffeur business with our comprehensive admin panel. 
            Manage bookings, track drivers in real-time, handle invoicing, and deliver 
            exceptional service—all from one intuitive platform designed specifically 
            for premium transportation services.
          </p>
          
          <div className="flex flex-col space-y-6 pt-4">
            {/* Feature 1 */}
            <div className="flex items-start space-x-6">
              <div className="size-16 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg 
                  className="w-8 h-8 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" 
                  />
                </svg>
              </div>
              <div className="flex flex-col space-y-2">
                <h2 className="font-bold text-md md:text-lg text-gray-900">
                  Real-Time Driver Tracking
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Monitor your entire fleet with live GPS tracking. Optimize routes, 
                  reduce wait times, and ensure passenger safety with instant location updates.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="size-16 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg 
                  className="w-8 h-8 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" 
                  />
                </svg>
              </div>
              <div className="flex flex-col space-y-2">
                <h2 className="font-bold text-md md:text-lg text-gray-900">
                  Complete Booking Management
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Streamline reservations with automated dispatch, instant confirmations, 
                  and seamless customer communication. Handle invoicing and statements effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;