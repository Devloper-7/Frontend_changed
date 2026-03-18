import ServiceCard from "./ServiceCard";

const ServicesSection: React.FC = () => {
  return (
    <section className="grid md:grid-cols-2 gap-6 py-8">
      <ServiceCard
        title="Digital Marketplace"
        description="Technology platform connecting..."
      />
      <ServiceCard
        title="Valorization Services"
        description="Customized valorization solutions..."
      />
    </section>
  );
};

export default ServicesSection;
