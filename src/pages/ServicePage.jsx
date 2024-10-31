import ServiceHero from "../components/ServiceHero";
import ServiceProfessionals from "../components/ServiceProfessionals";

const ServicePage = () => {
  return (
    <main className="text-gray-200 grid">
      <ServiceHero />
      <ServiceProfessionals />
    </main>
  );
};

export default ServicePage;
