import { useState, useEffect } from "react";
import { IMAGES } from "../../assets/Images";
import { tabs } from "../../helpers/data";

const Index = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? 1);
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Helper to get current tab data safely
  const activeTabData =
    tabs.find((tab) => tab.id === activeTab) ?? tabs[0] ?? {};

  const handleTabChange = (id) => {
    if (id === activeTab) return;

    // Smooth fade-out then fade-in of content
    setIsContentVisible(false);
    setTimeout(() => {
      setActiveTab(id);
      setIsContentVisible(true);
    }, 150);
  };

  // Optional: clean up timeout if component unmounts quickly
  useEffect(() => {
    return () => {
      setIsContentVisible(true);
    };
  }, []);

  return (
    <div className="bg-white pt-20">
      <div className="2xl:max-w-7xl max-w-7xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="mt-2 text-gray-600">
            Discover how our platform simplifies your workflow and helps you
            achieve more with less effort.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-8 mb-16 border px-3 py-8 items-center justify-evenly border-gray-300 shadow-xl rounded-md">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative cursor-pointer focus:outline-none transition-all duration-300 ease-out ${
                  isActive ? "scale-[1.02]" : "hover:scale-[1.02]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-lg border rounded-full px-4 py-3 font-semibold transition-all duration-300 ease-out ${
                      isActive
                        ? "text-foreground border-[#C73547] shadow-sm bg-white"
                        : "text-muted-foreground border-gray-300 bg-gray-50"
                    }`}
                  >
                    {tab.number}
                  </span>
                  <span
                    className={`text-base transition-colors duration-300 ease-out ${
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {tab.title}
                  </span>
                </div>

                {/* Active underline indicator */}
                <div
                  className={`absolute -bottom-8 left-0 right-0 h-1 rounded-t-sm origin-left transition-all duration-300 ease-out ${
                    isActive
                      ? "bg-[#C73547] scale-x-100 opacity-100"
                      : "bg-[#C73547] scale-x-0 opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transform transition-all duration-400 md:duration-500 ease-out ${
              isContentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {activeTabData.heading}
            </h2>
            <div className="space-y-4">
              {activeTabData.description?.map((para, idx) => (
                <p
                  key={idx}
                  className="text-muted-foreground leading-relaxed text-base"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transform transition-all duration-500 ease-out ${
              isContentVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-90 translate-y-3 scale-[0.99]"
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-pink-100 to-rose-100 rounded-3xl transform rotate-3 transition-transform duration-500 ease-out" />
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>
              <img
                src={IMAGES.featuresmercedes}
                alt="MTLDispatch Dashboard Preview"
                className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
