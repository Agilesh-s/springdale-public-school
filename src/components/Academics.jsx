// src/components/Academics.js
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported

const Academics = () => {
  return (
    <section id="academics" className="container my-5">
        <h2 className="text-center mb-4">Academics</h2>
        <div className="row">
            <div className="col-md-4 mb-3">
            <div className="card" style={{ backgroundColor: '#e9ecef' }}>
                <div className="card-body">
                <h5 className="card-title">Primary (Grades 1-5)</h5>
                <div className="row">
                    <div className="col-md-12">
                    <h6 className="card-subtitle mb-2 text-muted">Primary</h6>
                    <ul className="list-unstyled">
                        <li>English</li>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social Studies</li>
                        <li>Art</li>
                        <li>Physical Education</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div className="card" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body">
                <h5 className="card-title">Secondary (Grades 6-10)</h5>
                <div className="row">
                    <div className="col-md-12">
                    <h6 className="card-subtitle mb-2 text-muted">Secondary</h6>
                    <ul className="list-unstyled">
                        <li>English</li>
                        <li>Mathematics</li>
                        <li>Science (Physics, Chemistry, Biology)</li>
                        <li>Social Studies</li>
                        <li>Computer Science</li>
                        <li>Physical Education</li>
                        <li>Art</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div className="card" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body">
                <h5 className="card-title">Senior Secondary (Grades 11-12)</h5>
                <div className="row">
                    <div className="col-md-6">
                    <h6 className="card-subtitle mb-2 text-muted">Science Stream</h6>
                    <ul className="list-unstyled">
                        <li>Physics</li>
                        <li>Chemistry</li>
                        <li>Biology</li>
                        <li>Mathematics</li>
                        <li>Computer Science</li>
                        <li>English</li>
                    </ul>
                    </div>
                    <div className="col-md-6">
                    <h6 className="card-subtitle mb-2 text-muted">Commerce Stream</h6>
                    <ul className="list-unstyled">
                        <li>Accountancy</li>
                        <li>Business Studies</li>
                        <li>Economics</li>
                        <li>Mathematics</li>
                        <li>English</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 mb-3">
            <div className="card" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body">
                <h5 className="card-title">Teaching Methodologies</h5>
                <p className="card-text">
                    We use a blend of traditional and modern teaching techniques to cater to different learning styles.
                </p>
                </div>
                <div className="card-body">
                <h5 className="card-title">Educational Resources</h5>
                <p className="card-text">
                    Digital classrooms, interactive learning modules, and access to online educational platforms.
                </p>
                </div>
            </div>
        </div>
        </div>
    </section>

  );
};

export default Academics;
