import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import student from '../assets/student.jpg'
import '../App.css'

const students = [
  {
    name: 'John Smith',
    achievement: 'National Level Math Olympiad Winner',
    image: student
  },
  {
    name: 'Sarah Lee',
    achievement: 'Gold Medalist in State Swimming Championship',
    image: student
  },
  {
    name: 'Tech Innovators Club',
    achievement: 'Winners of Inter-School Robotics Competition',
    image: student
  },
  {
    name: 'Amy Parker',
    achievement: 'President of the Student Council',
    image: student
  },
  {
    name: 'Rajiv Mehta',
    achievement: 'Vice President of the Student Council',
    image: student
  },
  {
    name: 'Lisa Wong',
    achievement: 'Secretary of the Student Council',
    image: student
  },
  {
    name: 'Mark Thompson',
    achievement: 'Winner of the Inter-School Debate Competition',
    image: student
  },
  {
    name: 'Ella Brown',
    achievement: 'Winner of the Annual Art Competition',
    image: student
  },
  {
    name: 'Robert Johnson',
    achievement: 'Top Scorer in the Science Fair',
    image: student
  }
];

const Students = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="students" className="container my-5">
      <h2 className="text-center mb-5">Our Students</h2>
      <div className="position-relative">
        <div className="scroll-arrow left-arrow" onClick={scrollLeft}>
          &#8249;
        </div>
        <div className="scroll-container no-scrollbar" ref={scrollContainerRef}>
          {students.map((student, index) => (
            <div className="card-wrapper" key={index}>
              <div className="card h-100 d-flex flex-column">
                <img src={student.image} className="card-img-top" alt={student.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{student.name}</h5>
                  <p className="card-text">{student.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="scroll-arrow right-arrow" onClick={scrollRight}>
          &#8250;
        </div>
      </div>
    </section>
  );
};

export default Students;