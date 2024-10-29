import { Container, Row, Col } from "react-bootstrap";
import { AcademicsCard } from "./AcademicsCard";
import DL from "../assets/img/DL.jpg";
import AI_intro from "../assets/img/AI_intro.jpg";
import Geodata from "../assets/img/Geodata.jpg";

export const Academics = () => {

  const Academics = [
    {
      title: "Getting Started With Deep Learning",
      description: "",
      imgUrl: DL,
      certUrl: "https://learn.nvidia.com/certificates?id=BVznGHjkTYKSG038dqvLeQ/courses/course?course_id=coursev1:DLI+S-FX-01+V1"  // Use actual certificate URL
    },
    {
      title: "Introduction To Artificial Intelligence",
      description: "",
      imgUrl: AI_intro,
      certUrl: "#"
    },
    {
      title: "Geodata Processing Using Python",
      description: "",
      imgUrl: Geodata,
      certUrl: "#"
    }
  ];

  return (
    <section className="Academics" id="Academics">
      <Container>
        <Row>
          <Col size={12}>
            <div className="certifications-header">
              <h2>My Recent Certifications</h2>
              <p>Here are a few Certificates I've earned recently.</p>
            </div>
            <Row>
              {
                Academics.map((cert, index) => {
                  return (
                    <AcademicsCard 
                      key={index} 
                      {...cert} 
                    />
                  );
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
