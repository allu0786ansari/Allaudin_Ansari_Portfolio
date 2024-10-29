import { Container, Row, Col } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard.js";
import IBM from "../assets/img/IBM.jpg";
import AI_ML from "../assets/img/AI_ML.jpg";
import Business from "../assets/img/Business.jpg";

export const Experience = () => {
  const experienceData = [ // Renamed this array to avoid conflict
    {
      title: "Google AI-ML",
      description: "",
      imgUrl: AI_ML,
      certUrl: "https://learn.nvidia.com/certificates?id=BVznGHjkTYKSG038dqvLeQ/courses/course?course_id=coursev1:DLI+S-FX-01+V1"
    },
    {
      title: "Business Analyst",
      description: "",
      imgUrl: Business,
      certUrl: "#"
    },
    {
      title: "Leaveraging SkillsBuild & IBM Cloud in AI and Cloud",
      description: "",
      imgUrl: IBM,
      certUrl: "#"
    }
  ];

  return (
    <section className="Experience" id="Experience">
      <Container>
        <Row>
          <Col size={12}>
            <div className="Experience-header">
              <h2>My Recent Internships</h2>
              <p>Here are a few internships I've done recently.</p>
            </div>
            <Row>
              {
                experienceData.map((cert, index) => {
                  return (
                    <ExperienceCard // Use ExperienceCard component here
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
