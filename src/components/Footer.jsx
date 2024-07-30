import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5">
      <div className="container">
        <hr />
        <div className="row text-center text-md-start">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} Springdale Public School</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#terms" className=" text-reset text-decoration-none me-2">Terms & Conditions</a>
            <a href="#privacy" className="text-reset text-decoration-none">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
