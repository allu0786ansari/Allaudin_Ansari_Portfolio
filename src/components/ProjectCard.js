import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, demoUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="proj-details">
        <h4>{title}</h4>
        <span style={{color: '#fff'}}>{description}</span>
        <div className="proj-buttons" style={{ marginTop: '10px' }}>
          {/* Conditionally render GitHub button */}
          {githubUrl && (
            <Button 
              variant="dark" 
              href={githubUrl} 
              target="_blank" 
              style={{ marginRight: '10px' }}
            >
              GitHub
            </Button>
          )}
          {/* Conditionally render Demo button */}
          {demoUrl && (
            <Button 
              variant="primary" 
              href={demoUrl} 
              target="_blank"
            >
              Demo
            </Button>
          )}
        </div>
      </div>
    </Col>
  );
};
