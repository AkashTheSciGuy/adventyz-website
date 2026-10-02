import Container from "./Container";

function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  as: Tag = "section",
}) {
  return (
    <Tag id={id} className={`section ${className}`.trim()}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </Tag>
  );
}

export default Section;