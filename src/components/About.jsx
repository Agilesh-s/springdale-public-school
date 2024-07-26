// src/components/AboutUs.js
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutUsImage from '../assets/aboutUsImage.jpg'  // Make sure Bootstrap CSS is imported

const About = () => {
  return (
    <section id="about-us" className="container my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="card" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="row g-0">
          <div className="col-md-4">
          <img src={aboutUsImage} className="img-fluid rounded-start" alt="About Us" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Our History</h5>
              <p className="card-text">
                Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
              </p>
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">
                To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
              </p>
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">
                To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
              </p>
              <h5 className="card-title">Message from the Principal</h5>
              <p className="card-text">
                At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
