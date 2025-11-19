import React from "react";
import { IMAGES } from "../../assets/Images";
import { Link } from "react-router-dom";
import { ICONS } from "../../assets/icons";

const MobileApp = () => {
  return (
    <div className="min-h-screen bg-linear-to-br pt-44  from-gray-50 to-gray-100 py-16 px-4">
      <div className="2xl:max-w-7xl xl:max-w-6xl mx-auto 2xl:p-12 xl:p-8">
        <div className="relative">
          <div className="bg-(--primary-red-color) rounded-3xl shadow-2xl px-4 py-6 lg:p-16 grid lg:grid-cols-2 gap-12 items-center relative overflow-visible">
            <div className="text-white space-y-8 z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                <ICONS.Smartphone className="w-4 h-4" />
                <span className="text-sm font-medium">Available Now</span>
              </div>
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                  Download Our Mobile App
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Manage your chauffeur operations on the go. Real-time
                  tracking, bookings, and driver management at your fingertips.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="#"
                  className="bg-black  transition-all duration-300 rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <img
                    src={IMAGES.AppleIcon}
                    height={40}
                    width={40}
                    alt="playstore button"
                    className=" border-r  pr-2 border-white "
                  />
                  <div className="text-left">
                    <div className="text-xs text-white">Download on the</div>
                    <div className="md:text-lg text-md text-white font-semibold">
                      App Store
                    </div>
                  </div>
                </Link>
                <Link
                  to="#"
                  className="bg-black  transition-all duration-300 rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <img
                    src={IMAGES.GoogleIcon}
                    height={30}
                    width={30}
                    alt="playstore button"
                    className=" border-r  pr-2 border-white "
                  />
                  <div className="text-left">
                    <div className="text-xs text-white">Get it on</div>
                    <div className="md:text-lg text-md font-semibold text-white">
                      Google Play
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative hidden  lg:absolute lg:right-16 lg:top-32 xl:top-1/3  lg:-translate-y-1/2 md:flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-gray-900 rounded-[3rem] p-2 relative z-20">
                  <div>
                  <img src={IMAGES.DashboardBooking} className="rounded-[3rem]"  alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
