import { Col, Button } from "react-bootstrap";

export const AcademicsCard = ({ title, description, imgUrl, certUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="cert-imgbx">
        <img src={imgUrl} alt={title} className="cert-img" />
      </div>
      <div className="cert-details">
        <h4>{title}</h4>
        <p>{description}</p>
        <Button 
          variant="outline-light" 
          href={certUrl} 
          target="_blank" 
          className="cert-btn"
        >
          <i className="fas fa-certificate"></i> View Certificate
        </Button>
      </div>
    </Col>
  );
};
