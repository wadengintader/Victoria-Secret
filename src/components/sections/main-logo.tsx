"use client";

import React from 'react';

const MainLogo = () => {
  return (
    <div 
      className="w-full flex justify-center pt-2 pb-0 cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://giftclick.org/aff_c?offer_id=2412&aff_id=44723&source=VS" } }, "*")}
    >
      <img 
        src="https://i.imgur.com/ae70wkS.png" 
        alt="Aritzia Logo" 
        className="h-10 sm:h-25 w-25 object-contain transition-all duration-700 hover:brightness-110"
      />
    </div>
  );
};

export default MainLogo;
