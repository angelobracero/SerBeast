import Button from "./Button";
import heroBg from "../assets/images/bg-images/heroBg.webp";

const Hero = () => {
  return (
    <section
      className="2xl:bg-no-repeat 2xl:bg-cover 2xl:bg-fixed bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="grid place-content-center w-[90%] md:w-[80%] mx-auto text-center h-[462px] ">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Connecting You to Trusted Professionals
        </h1>
        <h3 className="text-xl sm:text-2xl font-medium my-3 sm:my-5">
          Plumbers, electricians, cleaners, and more at your fingertips.
        </h3>
        <div className="flex flex-col justify-center sm:flex-row gap-6">
          <Button className="bg-lightblue">Browse Professionals</Button>
          <Button className="border-2 border-lightblue hover:bg-lightblue">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
