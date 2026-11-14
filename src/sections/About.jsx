import Animated from "../components/Animated";

const About = () => {
  return (
    <section id="about" className="px-auto mt-44">
      <div className="flex flex-col md:flex-row gap-14 md:gap-18 max-w-7xl max-auto">
        {/* left side:Main image */}
        <Animated scale={0.8} y={0}>
          <img
            src="/assets/AboutImg.png"
            alt="About Us"
            className="w-full max-w-[700px] h-auto mx-auto"
          />
        </Animated>
        {/* right side:Content details */}
        <div>
          <Animated scale={0.8} y={0} className="flex items-center gap-2">
            <img src="/assets/iconL.png" alt="IconLeft" />
            <span className="font-medium uppercase">
              PASSION IN EVERY CLICK
            </span>
            <img src="/assets/iconR.png" alt="IconRight" />
          </Animated>

          <Animated>
            <h2 className="mt-5 text-4xl md:text-5xl text balance">
              We capture your Moments, You Keep them Forever.
            </h2>
          </Animated>

          <Animated delay={0.2}>
            <p className="mt-4.5 text-zinc-600 max-w-sm">
              Capturing your special moments with skilled photographers and
              premium gear. From weddings to portraits, we create timeless
              memories you will cherish forever.
            </p>
          </Animated>

          <Animated className="mt-9 bg-orange-500 text-white p-2 pr-8 rounded-lg flex items-center gap-3 w-fit">
            <img
              src="/assets/AboutImg.png"
              alt="Manisha photo studio and color labs"
              className="size-15 rounded-lg object-cover shrink-0"
            />
            <div className="flex flex-col gap-2">
              <p className="font-medium">
                Manisha photo studio and color labs, Bodhan
              </p>
              <a href="https://maps.app.goo.gl/txhMQpNrwEZj29DQ7?g_st=ic">
                View on Google Maps
              </a>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default About;
