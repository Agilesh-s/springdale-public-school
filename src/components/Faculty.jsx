import '../App.css';  
import teacher from '../assets/teacher.jpg'

const facultyMembers = [
  {
    name: 'John Doe',
    position: 'Principal',
    qualification: 'M.Ed',
    experience: '20 years of experience in educational administration',
    image: teacher
  },
  {
    name: 'Jane Smith',
    position: 'Vice Principal',
    qualification: 'M.Sc. in Physics',
    experience: '15 years of teaching experience',
    image: teacher
  },
  {
    name: 'Emily Johnson',
    position: 'English Teacher',
    qualification: 'M.A. in English',
    experience: '10 years of teaching experience',
    image: teacher
  },
  {
    name: 'Michael Brown',
    position: 'Mathematics Teacher',
    qualification: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience',
    image: teacher
  },
  {
    name: 'Sophia Davis',
    position: 'Science Teacher',
    qualification: 'M.Sc. in Chemistry',
    experience: '12 years of teaching experience',
    image: teacher
  },
  {
    name: 'David Wilson',
    position: 'Computer Science Teacher',
    qualification: 'B.Tech in Computer Science',
    experience: '5 years of teaching experience',
    image: teacher
  }
];

const Faculty = () => {
  return (
    <section id="faculty" className="container my-5">
      <h2 className="text-center mb-5">Our Faculties</h2>
      <div className="row">
        {facultyMembers.map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 d-flex flex-column">
              <img src={member.image} className="card-img-top" alt={member.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.position}</p>
                <p className="card-text">{member.qualification}</p>
                <p className="card-text">{member.experience}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faculty;
