import { serviceProfessionalsData } from "./serviceProfessionalsData";
import ServiceProfessional from "./ServiceProfessional";
import Button from "./Button";
import SortableServiceList from "./SortableServiceList";

const ServiceProfessionals = () => {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto text-center py-10">
      <h1 className="text-4xl font-montserrat font-bold pb-6">Professionals</h1>
      <SortableServiceList />
      <div className="flex flex-wrap justify-center  gap-y-20 gap-x-10 mt-16 xl:gap-x-12 mb-10">
        {serviceProfessionalsData.map((pro) => (
          <ServiceProfessional
            key={pro.name}
            img={pro.img}
            name={pro.name}
            description={pro.description}
          />
        ))}
      </div>
      <Button className="bg-lightblue font-normal">View More</Button>
    </section>
  );
};

export default ServiceProfessionals;
