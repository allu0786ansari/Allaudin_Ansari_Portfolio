import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
//import skills_bg from "../assets/img/skills_bg.jpg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { name: "Web Development", value: 70 },
    { name: "Machine Learning", value: 60 },
    { name: "AI Engineering", value: 50 },
    { name: "Data Science", value: 35 },
    { name: "Gen AI", value: 40 },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Proficient in full-stack development with Django as the backend and React.js as the frontend, building scalable and dynamic web applications. Skilled in creating RESTful APIs with Django and integrating them with React for seamless user experiences.<br></br> Experienced in machine learning techniques, including data preprocessing, exploratory data analysis, model training, and AI integration using TensorFlow and Keras. Possesses a strong understanding of ML algorithms, deep learning techniques, and NLP, allowing me to dive deep into the domain of machine learning.<br></br> Adept at using version control (Git) and managing databases like MySQL. Familiar with cloud deployment and containerization for efficient application management.</p>

              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item" key={index} style={{ width: '120px', margin: '0 auto' }}>
                    <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
                      <CircularProgressbar
                        value={skill.value}
                        text={`${skill.value}%`}
                        styles={buildStyles({
                          pathColor: `#171ac4`,
                          textColor: '#fff',
                          trailColor: '#d6d6d6',
                          backgroundColor: '#3e98c7',
                        })}
                      />
                    </div>
                    <h5 style={{ textAlign: 'center', marginTop: '10px' }}>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Img" />
    </section>
  );
};
