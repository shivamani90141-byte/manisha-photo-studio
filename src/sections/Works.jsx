import React, { useState } from "react";
import Animated from "../components/Animated";
import { works } from "../data/data";
import { motion } from "motion/react";

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextWork = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const prevWork = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  return (
    <section id="works" className="mt-32 md:mt-44 px-4 md:px-8">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <Animated delay={0.2}>
          <p className="text-orange-500 font-medium uppercase mb-3.5 text-sm md:text-base">
            Some of Our Best Works
          </p>
        </Animated>

        <Animated>
          <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-lg mx-auto text-balance">
            Look some of our Best Works Below
          </h2>
        </Animated>
      </div>

      {/* Carousel */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10 max-w-7xl mx-auto">
        {/* Previous Button */}
        <button
          onClick={prevWork}
          className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                     rounded-full border border-gray-200
                     flex items-center justify-center
                     text-xl md:text-2xl
                     hover:bg-gray-100 transition"
          aria-label="Previous work"
        >
          ←
        </button>

        {/* Image */}
        <Animated key={currentIndex} y={20}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="
              bg-[#fff8e8]
              rounded-2xl
              p-3
              sm:p-4
              md:p-8
              w-[calc(100vw-130px)]
              sm:w-[calc(100vw-180px)]
              md:w-[850px]
              lg:w-[900px]
              max-w-full
            "
          >
            <img
              src={works[currentIndex].img}
              alt={works[currentIndex].id}
              className="
                w-full
                h-auto
                max-h-[65vh]
                object-contain
                rounded-sm
              "
            />
          </motion.div>
        </Animated>

        {/* Next Button */}
        <button
          onClick={nextWork}
          className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                     rounded-full border border-gray-200
                     flex items-center justify-center
                     text-xl md:text-2xl
                     hover:bg-gray-100 transition"
          aria-label="Next work"
        >
          →
        </button>
      </div>

      {/* Counter */}
      <div className="text-center mt-8 md:mt-10 text-gray-500">
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(works.length).padStart(2, "0")}
      </div>
    </section>
  );
};

export default Works;
