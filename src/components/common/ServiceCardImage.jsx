import "../../styles/service-card-images.css";

export default function ServiceCardImage({ service, preview = false }) {
  return (
    <picture className="service-card-image" aria-hidden="true">
      <source
        srcSet={`${service.image.small} 480w, ${service.image.large} 960w`}
        sizes={preview
          ? "(max-width: 768px) calc(100vw - 40px), (max-width: 1024px) 45vw, 380px"
          : "(max-width: 768px) calc(100vw - 40px), 580px"}
        type="image/webp"
      />
      <img src={service.image.large} alt="" width="960" height="640" loading="lazy" decoding="async" />
    </picture>
  );
}
