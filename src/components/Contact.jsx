// src/components/ContactUs.js
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  return (
    <section id="contactus" className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        {/* Contact Information Section */}
        <div className="col-md-6 mb-4">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Get in Touch</h5>
              <p className="card-text">
                We are here to answer any questions you may have. Reach out to us and we will respond as soon as we can.
              </p>
              <p className="card-text"><strong>Phone:</strong> +1 (123) 456-7890</p>
              <p className="card-text"><strong>Email:</strong> info@springdale.edu</p>
              <div className="mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616973.3927511281!2d-80.03895459102785!3d43.50957976010568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b17b492bf124b%3A0x897d9256872b691f!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1722002972580!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="col-md-6 mb-4">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Contact Form</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
