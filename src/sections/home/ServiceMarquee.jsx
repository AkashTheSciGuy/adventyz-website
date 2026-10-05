import { services } from "../../data/services";

function ServiceMarquee() {
  const marqueeItems = [...services, ...services];

  return (
    <section
      className="service-marquee"
      aria-label="Adventyz services"
    >
      <div className="service-marquee__track">
        {marqueeItems.map((service, index) => (
          <div
            className="service-marquee__item"
            key={`${service.id}-${index}`}
            aria-hidden={index >= services.length}
          >
            <span>{service.title}</span>

            <span
              className="service-marquee__star"
              aria-hidden="true"
            >
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceMarquee;