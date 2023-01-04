import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="py-16 md:py-36 bg-[length:100%_55%] bg-no-repeat px-4 flex justify-center items-center bg-gradient-to-r from-[#fedcdd] to-[#b9c8e7]">
        <div className="p-8 bg-white md:p-16 rounded-xl shadow-lg text-center">
          <h1 className="font-black text-4xl pb-2 bg-gradient-to-r from-[#f1a8bc] to-[#6e91e3] bg-clip-text text-transparent">
            YOONVELOP DEVLOG
          </h1>
          <p>
            Yoonvelop Devlog is a blog template built with Next.js and Notion
            API.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
