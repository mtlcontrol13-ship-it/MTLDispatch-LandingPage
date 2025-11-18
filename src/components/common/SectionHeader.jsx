import React from "react";

const SectionHeader = ({heading, para}) => {
  return (
    <>
      <div className="flex flex-col space-y-4 pb-12 items-center justify-center">
        <h1 className="font-bold text-3xl md:text-4xl">{heading}</h1>
        <h1 className="text-gray-500 text-md md:text-sm">{para}</h1>
      </div>
    </>
  );
};

export default SectionHeader;
