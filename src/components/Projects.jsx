import data from "../../data/projectsData.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Projects.css";

const Projects = () => {
  //   console.log(data);
  return (
    <section className="projects-section">
      <Container>
        <h2 className="section-title">My Projects</h2>
        <Row>
          {data.map((project, index) => (
            <Col key={index} md={12} className="mb-4">
              <Card className="project-card flex-md-row align-items-stretch shadow-sm">
                <Card.Img
                  className="project-img"
                  src={project.image}
                  alt={project.title}
                />
                <Card.Body className="project-body d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="title">{project.title}</Card.Title>
                    <Card.Text className="project-desc">
                      {project.description}
                    </Card.Text>
                    <p className="project-tech">
                      <strong>Stack:</strong> {project.techStack.join(", ")}
                    </p>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <Button
                      variant="outline-primary"
                      href={project.github}
                      target="_blank"
                      className="button"
                    >
                      GitHub
                    </Button>
                    {project.demo && (
                      <Button
                        variant="primary"
                        href={project.demo}
                        target="_blank"
                        className="button"
                      >
                        Demo
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
