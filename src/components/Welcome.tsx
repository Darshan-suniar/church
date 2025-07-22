import type React from "react";
import video from "../assets/video.mp4";

const Welcome :React.FC = () => {
  return (
    <section className="py-5">
      <div className=" mx-auto text-center bg-sky-100  p-5 mb-6">
        <hr className="tag mb-4" />
        <h2 className="text-4xl font-bold  text-center mb-4 text-sky-600 uppercase">
          ' Workship Every Sunday at 10:00 AM - 1:00 PM '
        </h2>
        <hr className="tag" />
      </div>
      <div className="relative max-w-7xl h-[500px] mx-auto overflow-hidden rounded-md flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold ">
            Welcome to Philadelphia Fellowship
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200 mt-5">
            A place where faith meets community. Join us every Sunday for a
            powerful message, heartfelt worship, and a loving church family.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
