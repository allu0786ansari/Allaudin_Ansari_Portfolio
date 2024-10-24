import { Container, Row, Col } from "react-bootstrap";
import { AcademicsCard } from "./AcademicsCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import finance_tracker from "../assets/img/finance_tracker.png";

export const Academics = () => {

  const Academics = [
    {
      title: "Programming in JAVA",
      description: "Achieved elite rank in Java certification through NPTEL, showcasing advanced proficiency in Java programming and comprehensive understanding of key concepts.",
      imgUrl: projImg1,
      certUrl: "#"  // Use actual certificate URL
    },
    {
      title: "Python Programming - IIT Kharagpur",
      description: "Completed Python certification from IIT Kharagpur through NPTEL, demonstrating expertise in Python programming.",
      imgUrl: projImg2,
      certUrl: "#"
    },
    {
      title: "Programming in JavaScript",
      description: "Successfully completed JavaScript certification on Coursera, emphasizing practical proficiency and solid understanding of key concepts.",
      imgUrl: finance_tracker,
      certUrl: "#"
    }
  ];

  return (
    <section className="certifications" id="certifications">
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
