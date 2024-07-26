// src/components/Faculty.js
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported
import teacher from '../assets/teacher.jpg'

const Faculty = () => {
  return (
    <section id="faculty" className="container my-5">
      <h2 className="text-center mb-4">Meet Our Faculties</h2>
      <div className="row">
        {/* Faculty Member 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={teacher} className="card-img-top" alt="John Doe" />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">Principal</p>
              <p className="card-text">M.Ed, 20 years of experience in educational administration.</p>
            </div>
          </div>
        </div>
        {/* Faculty Member 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={teacher} className="card-img-top" alt="Jane Smith" />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">Vice Principal</p>
              <p className="card-text">M.Sc. in Physics, 15 years of teaching experience.</p>
            </div>
          </div>
        </div>
        {/* Faculty Member 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={teacher} className="card-img-top" alt="Emily Johnson" />
            <div className="card-body">
              <h5 className="card-title">Emily Johnson</h5>
              <p className="card-text">English Teacher</p>
              <p className="card-text">M.A. in English, 10 years of teaching experience.</p>
            </div>
          </div>
        </div>
        {/* Faculty Member 4 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={teacher} className="card-img-top" alt="Michael Brown" />
            <div className="card-body">
              <h5 className="card-title">Michael Brown</h5>
              <p className="card-text">Mathematics Teacher</p>
              <p className="card-text">M.Sc. in Mathematics, 8 years of teaching experience.</p>
            </div>
          </div>
        </div>
        {/* Faculty Member 5 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={teacher} className="card-img-top" alt="Sophia Davis" />
            <div className="card-body">
              <h5 className="card-title">Sophia Davis</h5>
              <p className="card-text">Science Teacher</p>
              <p className="card-text">M.Sc. in Chemistry, 12 years of teaching experience.</p>
            </div>
          </div>
        </div>
        {/* Faculty Member 6 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={teacher} className="card-img-top" alt="David Wilson" />
            <div className="card-body">
              <h5 className="card-title">David Wilson</h5>
              <p className="card-text">Computer Science Teacher</p>
              <p className="card-text">B.Tech in Computer Science, 5 years of teaching experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
