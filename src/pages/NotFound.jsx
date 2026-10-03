import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

function NotFound() {
  return (
    <main className="not-found">
      <Container className="not-found__container">
        <p className="not-found__code">
          404
        </p>

        <h1>
          This page went off-script.
        </h1>

        <p className="not-found__description">
          The page you're looking for doesn't exist or may have moved.
        </p>

        <div className="not-found__actions">
          <Button to="/">
            Back to Home
          </Button>

          <Button to="/contact" variant="secondary">
            Contact Adventyz
          </Button>
        </div>
      </Container>
    </main>
  );
}

export default NotFound;