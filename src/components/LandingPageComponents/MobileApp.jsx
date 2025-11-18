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
                  className="bg-white hover:bg-gray-50 transition-all duration-300 rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <img
                    src={IMAGES.Apple}
                    alt="Apple-logo"
                    height={50}
                    width={50}
                    className="border-r border-black "
                  />
                  <div className="text-left">
                    <div className="text-xs text-black">Download on the</div>
                    <div className="md:text-lg text-md text-black font-semibold">
                      App Store
                    </div>
                  </div>
                </Link>
                <Link
                  to="#"
                  className="bg-white hover:bg-gray-50 transition-all duration-300 rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <img
                    src={IMAGES.PlayStore}
                    height={50}
                    width={50}
                    alt="playstore button"
                    className=" border-r border-black "
                  />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Get it on</div>
                    <div className="md:text-lg text-md font-semibold text-gray-900">
                      Google Play
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative hidden  lg:absolute lg:right-16 lg:top-32 xl:top-1/3  lg:-translate-y-1/2 md:flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-gray-900 rounded-[3rem] p-2.5 w-[320px] relative z-20">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden 2xl:h-[600px] xl:h-[540px]">
                    <div className="bg-gray-50 px-6 py-3 flex justify-between items-center">
                      <span className="text-xs font-semibold">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
                        <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
                        <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
                      </div>
                    </div>

                    <div className="p-5 bg-linear-to-br from-gray-50 to-white">
                      <div className="bg-white rounded-2xl px-4 py-3 shadow-sm mb-5 border border-gray-100">
                        <div className="w-32 h-3 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                        <button className="bg-red-600 text-white px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap shadow-md">
                          Dashboard
                        </button>
                        <button className="bg-white text-gray-700 px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap shadow-sm border border-gray-200">
                          Bookings
                        </button>
                        <button className="bg-white text-gray-700 px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap shadow-sm border border-gray-200">
                          Drivers
                        </button>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-linear-to-br from-pink-400 to-pink-500 rounded-2xl p-5 shadow-lg">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-white font-bold text-lg mb-1">
                                Active Rides
                              </h3>
                              <div className="flex items-center gap-1">
                                <ICONS.Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                                <span className="text-white text-sm font-medium">
                                  4.8
                                </span>
                              </div>
                            </div>
                            <ICONS.Heart className="w-6 h-6 fill-white text-white" />
                          </div>
                          <div className="text-white text-2xl font-bold">
                            24
                          </div>
                          <div className="w-full bg-white/30 rounded-full h-2 mt-3">
                            <div className="bg-white rounded-full h-2 w-3/4"></div>
                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-linear-to-br from-blue-400 to-blue-500 rounded-2xl p-5 shadow-lg">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-white font-bold text-lg mb-1">
                                Drivers Online
                              </h3>
                              <div className="flex items-center gap-1">
                                <ICONS.Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                                <span className="text-white text-sm font-medium">
                                  4.9
                                </span>
                              </div>
                            </div>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                          <div className="text-white text-2xl font-bold">
                            156
                          </div>
                          <div className="w-full bg-white/30 rounded-full h-2 mt-3">
                            <div className="bg-white rounded-full h-2 w-4/5"></div>
                          </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl p-5 shadow-lg">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-white font-bold text-lg mb-1">
                                Revenue Today
                              </h3>
                              <div className="flex items-center gap-1">
                                <span className="text-white text-sm font-medium">
                                  +12.5%
                                </span>
                              </div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg text-white text-xs">
                              Live
                            </div>
                          </div>
                          <div className="text-white text-2xl font-bold">
                            $8,420
                          </div>
                          <div className="w-full bg-white/30 rounded-full h-2 mt-3">
                            <div className="bg-white rounded-full h-2 w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
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
