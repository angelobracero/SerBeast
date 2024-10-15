import Professional from "./Professional";
import { ProfessionalsData } from "./professionalData";
import Button from "./Button";

const FeaturedProfessional = () => {
  return (
    <section className="bg-[#121212]">
      <div className="w-[90%] md:w-[80%] mx-auto text-center py-10 text-xl font-semibold font-montserrat">
        <h1 className="text-3xl font-montserrat font-bold pb-6">
          Featured Professionals
        </h1>
        <div className="flex flex-wrap justify-center gap-y-20 gap-x-10 mt-16 xl:gap-x-20 mb-10">
          {ProfessionalsData.map((professional) => (
            <Professional
              key={professional.name}
              img={professional.img}
              name={professional.name}
              description={professional.description}
            />
          ))}
        </div>
        <Button className="bg-lightblue font-normal">View More</Button>
      </div>
    </section>
  );
};

export default FeaturedProfessional;
