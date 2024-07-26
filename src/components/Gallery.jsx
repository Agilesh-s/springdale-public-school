import { Carousel } from 'react-bootstrap';
import classroom from '../assets/classroom.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
  return (
    <section id="gallery" className="container my-5">
      <h2 className="text-center mb-4">Gallery</h2>
      <Carousel className="reduced-height-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={classroom}
            alt="Sports Day"
          />
          <Carousel.Caption>
            <h3>Sports Day</h3>
            <p>Students participating in various sports events.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={classroom}
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
            src={classroom}
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
            src={classroom}
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
