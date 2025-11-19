import { useState } from "react";
import { IMAGES } from "../../assets/Images";
import { tabs } from "../../helpers/data";

const Index = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <div className="2xl:max-w-7xl max-w-7xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-8 mb-16 border px-3 py-8 items-center justify-evenly border-gray-300 shadow-xl rounded-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`text-lg  border rounded-full border-gray-300 px-4 py-3 font-semibold ${
                    activeTab === tab.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {tab.number}
                </span>
                <span
                  className={`text-base ${
                    activeTab === tab.id
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {tab.title}
                </span>
              </div>
              {activeTab === tab.id && (
                <div className="absolute -bottom-8 left-0 right-0 h-1 bg-[#C73547] rounded-t-sm" />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {tabs[activeTab].heading}
            </h2>
            <div className="space-y-4">
              {tabs[activeTab].description.map((para, idx) => (
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
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl transform rotate-3" />
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
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
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
