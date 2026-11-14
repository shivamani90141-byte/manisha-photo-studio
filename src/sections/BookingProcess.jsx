import React from "react";
import Animated from "../components/Animated";
import { bookingSteps } from "../data/data";

const BookingProcess = () => {
  return (
    <section id="booking-process" className="px-auto mt-44">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-25">
        {/* left side */}
        <div className="flex flex-col justify-center md:text-left">
          <Animated delay={0.2}>
            <p className="text-orange-500 font-medium uppercase mb-4">
              Book your shoot and confirm your availability
            </p>
          </Animated>

          <Animated delay={0.2}>
            <h2 className="text-4xl md:text-5xl mb-16">
              Reserve your shoot with us in just three simple steps.
            </h2>
          </Animated>
        </div>
        {/* right side */}
        <div className="space-y-14 text-left">
          {bookingSteps.map((step, index) => (
            <Animated
              key={index}
              y={150}
              delay={index * 0.15}
              className="flex items-start gap-9"
            >
              <span className="text-orange-500 font-medium text-lg shrink-0">
                {step.number}
              </span>
              <div className="flex flex-col">
                <h3 className="text-xl mb-5">{step.title}</h3>
                <p className="text-zinc-600">{step.description}</p>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
