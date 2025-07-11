import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden w-full min-h-[80vh] flex items-center justify-center"
    >
      {/* 3D Starfield Full Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <HeroExperience />
      </div>

      {/* Hero Content Overlay */}
      <div className="hero-layout relative z-10 w-full flex flex-col md:flex-row items-center justify-center">
        {/* LEFT: HERO CONTENT */}
        <div className="flex flex-col gap-7 md:w-1/2 w-full md:items-start items-center md:px-20 px-5">
          <div className="hero-text">
            <h1>
              Shaping{" "}
              <span className="slide">
                <span className="wrapper flex flex-wrap gap-2">
                  {words.map((word) => {
                    const lowercase = word.text.toLowerCase();
                    const isPurple = [
                      "design",
                      "code",
                      "idea",
                      "concept",
                    ].includes(lowercase);

                    return (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span
                          className={`${
                            isPurple
                              ? "text-purple-500 font-bold"
                              : "text-white"
                          }`}
                        >
                          {word.text}
                        </span>
                      </span>
                    );
                  })}
                </span>
              </span>{" "}
            </h1>
            <h1> into Real Projects</h1>
            <h1> that Deliver Results</h1>
          </div>

          <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            Hi, I'm Lakulesh, a developer based in India with a passion for
            code.
          </p>

          <Button
            className="md:w-80 md:h-16 w-60 h-12"
            id="button"
            text="See my Work"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
