// src/components/Footer.js
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="py-3">
      <div className="container">
        <hr style={{
          border: 'none',
          height: '5px',
          backgroundColor: "#000" // Change the color as needed
        }} />
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">&copy; 2024 Springdale Public School</p>
          <div>
            <a href="#terms" className="text-reset text-decoration-none mx-2">Terms of Service</a>
            <a href="#privacy" className="text-reset text-decoration-none mx-2">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
