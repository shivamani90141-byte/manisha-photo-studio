import Animated from "../components/Animated";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center min-h-screen justify-center bg-[url('/assets/HeroBanner.png')] bg-cover bg-center bg-no-repeat px-4 pt-20">
      <Animated delay={0.2} y={-20}>
        <p className="text-orange-600">CAPTURE YOUR MOMENTS WITH US !</p>
      </Animated>

      <Animated>
        <h1 className="text-5xl md:text-6xl font-medium max-w-3xl text-center mt-5 font-urbanist text-balance">
          "Life happens in moments, photography gives you those moments forever"
        </h1>
      </Animated>

      <Animated delay={0.2}>
        <p className="text-zinc-600 max-w-md text-center mt-3">
          Experience the magic of photography and editing. We provide
          professional services to capture your special moments.
        </p>
      </Animated>

      <Animated>
        <a
          href="#booking-process"
          className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded-full mt-8 inline-block"
        >
          Confirm Your Event
        </a>
      </Animated>
    </section>
  );
};

export default HeroSection;
