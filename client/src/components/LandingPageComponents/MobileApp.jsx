import React from "react";
import { IMAGES } from "../../assets/Images";
import { Link } from "react-router-dom";
import { ICONS } from "../../assets/icons";
import Container from "../common/Container";

const MobileApp = () => {
  return (
    <div className="min-h-[700px] bg-linear-to-br pt-44 from-gray-50 to-gray-100 py-16">
      <Container>
        <div className="relative">
          <div className="bg-(--primary-red-color) rounded-3xl shadow-2xl px-4 py-6 lg:p-16 grid lg:grid-cols-2 gap-12 items-center relative overflow-visible">
            {/* LEFT TEXT */}
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
                  className="bg-black transition-all duration-300 rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <img
                    src={IMAGES.AppleIcon}
                    height={40}
                    width={40}
                    alt="appstore"
                    className="border-r pr-2 border-white"
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
                  className="bg-black transition-all duration-300 rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <img
                    src={IMAGES.GoogleIcon}
                    height={30}
                    width={30}
                    alt="googleplay"
                    className="border-r pr-2 border-white"
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

            {/* RIGHT PHONE MOCKUP */}
            <div className="relative hidden lg:absolute lg:right-8 lg:top-[40%] lg:-translate-y-1/2 lg:flex justify-end">
              <div className="relative z-10 scale-90 xl:scale-100">
                {/* Phone Frame */}
                <div className="relative mx-auto border-gray-900 bg-gray-900 border-14 rounded-[2.5rem] shadow-2xl">
                  {/* Notch */}
                  <div className="w-[148px] h-[18px] bg-gray-900 top-0 rounded-b-2xl left-1/2 -translate-x-1/2 absolute z-20"></div>

                  {/* Side Buttons */}
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                  <div className="h-16 w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

                  {/* Screen Content */}
                  <div className="rounded-[26px] overflow-hidden bg-white relative z-10">
                    <img
                      src={IMAGES.DashboardBooking}
                      className="w-[300px] h-auto object-cover"
                      alt="dashboard mockup"
                    />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-blue-500/20 blur-2xl -z-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MobileApp;
