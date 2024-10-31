import heroBg from "../assets/images/bg-images/heroBg.webp";

const ServiceHero = () => {
  return (
    <section
      className="2xl:bg-no-repeat 2xl:bg-cover 2xl:bg-fixed bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="grid place-content-center w-[90%] md:w-[80%] mx-auto text-center h-[462px] ">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Plumbers
        </h1>
        <h3 className="text-xl sm:text-2xl font-medium my-3 sm:my-5">
          Trusted local plumbers for repairs, installations, and emergency
          services.
        </h3>
      </div>
    </section>
  );
};

export default ServiceHero;
