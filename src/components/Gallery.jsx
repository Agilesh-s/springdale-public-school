import { Carousel } from 'react-bootstrap';
import classroom from '../assets/classroom.jpg';
import sport from '../assets/sport_day.jpg';
import library from '../assets/library.jpg';
import cultural from '../assets/culturals.jpg';
import science from '../assets/science.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Gallery = () => {
  return (
    <section id="gallery" className="container my-5">
      <h2 className="text-center mb-5">Gallery</h2>
      <Carousel className="reduced-height-carousel">
      <Carousel.Item >
        <img src={sport} className="d-block w-100"  alt="Annual Sports Day" />
        <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={science}
            alt="Science Exhibition"
          />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Students presenting their science projects.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cultural}
            alt="Cultural Fest"
          />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Students performing in the cultural fest.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={classroom}
            alt="Classroom"
          />
          <Carousel.Caption>
            <h3>Classroom</h3>
            <p>A glimpse of our interactive classrooms.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={library}
            alt="Library"
          />
          <Carousel.Caption>
            <h3>Library</h3>
            <p>Students reading and studying in the school library.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
       </Carousel>
    </section>
  );
};

export default Gallery;


