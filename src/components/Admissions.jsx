// src/components/Admissions.js
import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure Bootstrap CSS is imported

const Admissions = () => {
  return (
    <section id="admissions" className="container my-5">
      <h2 className="text-center mb-4">Admissions</h2>
      <div className="card" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="card-body">
          <h5 className="card-title">Admission Process</h5>
          <p className="card-text">
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
          <h5 className="card-title">Admission Criteria</h5>
          <p className="card-text">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>
          <h5 className="card-title">Important Dates</h5>
          <ul className="list-unstyled">
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
