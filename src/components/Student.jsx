// src/components/Students.js
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported
import student from '../assets/student.jpg'

const Students = () => {
  return (
    <section id="students" className="container my-5">
      <h2 className="text-center mb-4">Students</h2>
      <div className="row">
        {/* Student Life */}
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Life at Springdale</h5>
              <p className="card-text">
                Our students engage in a variety of extracurricular activities and clubs that foster personal growth and development.
              </p>
              <div className="row">
                <div className="col-md-4">
                  <img src={student} className="img-fluid" alt="Music Club" />
                  <p className="text-center">Music Club</p>
                </div>
                <div className="col-md-4">
                  <img src={student} className="img-fluid" alt="Sports Activities" />
                  <p className="text-center">Sports Activities</p>
                </div>
                <div className="col-md-4">
                  <img src={student} className="img-fluid" alt="Debate Club" />
                  <p className="text-center">Debate Club</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Achievements</h5>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img src={student} className="card-img-top" alt="John Smith" />
                    <div className="card-body">
                      <h5 className="card-title">John Smith</h5>
                      <p className="card-text">National Level Math Olympiad Winner</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img src={student} className="card-img-top" alt="Sarah Lee" />
                    <div className="card-body">
                      <h5 className="card-title">Sarah Lee</h5>
                      <p className="card-text">Gold Medalist in State Swimming Championship</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img src={student} className="card-img-top" alt="Tech Innovators Club" />
                    <div className="card-body">
                      <h5 className="card-title">Tech Innovators Club</h5>
                      <p className="card-text">Winners of Inter-School Robotics Competition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Council */}
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Student Council</h5>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img src={student} className="card-img-top" alt="Amy Parker" />
                    <div className="card-body">
                      <h5 className="card-title">Amy Parker</h5>
                      <p className="card-text">President, Grade 12</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img src={student} className="card-img-top" alt="Rajiv Mehta" />
                    <div className="card-body">
                      <h5 className="card-title">Rajiv Mehta</h5>
                      <p className="card-text">Vice President, Grade 11</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img src={student} className="card-img-top" alt="Lisa Wong" />
                    <div className="card-body">
                      <h5 className="card-title">Lisa Wong</h5>
                      <p className="card-text">Secretary, Grade 10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
