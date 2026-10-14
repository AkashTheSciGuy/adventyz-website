import "../../styles/light-card-images.css";

export default function LightCardImage({ image, wide = false }) {
  return (
    <picture className="light-card-image" aria-hidden="true">
      <source
        type="image/webp"
        srcSet={`${image.small} 480w, ${image.large} 960w`}
        sizes={wide
          ? "(max-width: 900px) calc(100vw - 40px), 580px"
          : "(max-width: 768px) calc(100vw - 40px), 380px"}
      />
      <img src={image.large} alt="" width="960" height="640" loading="lazy" decoding="async" />
    </picture>
  );
}
