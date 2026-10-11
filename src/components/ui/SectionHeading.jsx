function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleTag: Heading = "h2",
}) {
  return (
    <div
      className={`section-heading section-heading--${align} ${className}`.trim()}
    >
      {eyebrow && (
        <p className="section-heading__eyebrow">{eyebrow}</p>
      )}

      <Heading className="section-heading__title">{title}</Heading>

      {description && (
        <p className="section-heading__description">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
