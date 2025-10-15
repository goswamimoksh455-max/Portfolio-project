import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Goswami Moksh
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}

            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>


          {/* <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-wrap justify-center gap-5">
            <a
              href="#projects"
              className="px-8 py-3 text-lg font-semibold rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>

            <a
              href=""
              className="px-8 py-3 text-lg font-semibold rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>
          </div> */}
          <div className="pt-6 opacity-0 animate-fade-in-delay-4 flex flex-wrap justify-center gap-6">
            {/* View My Work Button */}
            <a
              href="#projects"
              className="px-8 py-3 text-lg font-medium rounded-full bg-primary text-white 
               shadow-md hover:shadow-lg hover:scale-105 
               hover:ring-2 hover:ring-primary/40 
               transition-all duration-300"
            >
              View My Work
            </a>

            {/* Download CV Button */}
            <a
              href="/public/projects\Moksh_Goswami.pdf"
              target="_blank"
              className="px-8 py-3 text-lg font-medium rounded-full border border-primary text-primary 
               shadow-md hover:shadow-lg hover:scale-105 
               hover:ring-2 hover:ring-primary/40 
               transition-all duration-300"
            >
              Download Resume
            </a>
          </div>


        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
