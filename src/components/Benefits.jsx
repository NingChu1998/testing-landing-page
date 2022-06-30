import React from 'react';
import FastIcon from '/Users/ningchu/Desktop/landing-page/src/images/benefit/fast.svg';
import InternetIcon from '/Users/ningchu/Desktop/landing-page/src/images/benefit/internet.svg';
import SmartIcon from '/Users/ningchu/Desktop/landing-page/src/images/benefit/smart.svg';

function Benefits() {
  return (
    <section className="mb-10">
      <div data-aos="fade-up" data-aos-delay="700" className="relative max-w-6xl  mx-auto px-4 sm:px-6  ">
        <div className="">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center md:pb-5">
            <h2 className="h4">WOD SQUAD empowers everyone</h2>
          </div>
          {/* Items */}
          <div className=" max-w-sm mx-auto grid gap-6 md:grid-cols-3 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none ">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src={FastIcon} className="App-logo h-10 " alt="fast-icon" />
              <p className="text-lg font-bold leading-snug tracking-tight m-1">Fast</p>
              <p className="text-gray-500 text-center">Edit, manage, and update your workout data quickly.</p>
            </div>
            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src={SmartIcon} className="App-logo h-10" alt="smart-icon" />
              <h4 className="text-lg font-bold leading-snug tracking-tight m-1">Smart</h4>
              <p className="text-gray-500 text-center">Complete workout movement and patterns tracking  efficiently.</p>
            </div>
            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src={InternetIcon} className="App-logo h-10" alt="internet-icon" />
              <h5 className="text-lg font-bold leading-snug tracking-tight m-1">Social</h5>
              <p className="text-gray-500 text-center">Get inspired and connected with workout buddies around the world</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
