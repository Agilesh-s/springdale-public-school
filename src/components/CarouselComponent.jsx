import { Carousel } from 'react-bootstrap';
import school from '../assets/school_tour.mp4';
import schoolPhoto from '../assets/school.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const CarouselComponent = () => {
  return (
    <div>      
      <Carousel className="mt-4">
        <Carousel.Item>
          <img src={schoolPhoto} className="d-block w-100" alt="School" />
        </Carousel.Item>
        <Carousel.Item>
          <video className="d-block w-100" autoPlay muted loop>
            <source src={school} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Carousel.Caption>
            <h3>School Tour</h3>
            <p>A Glimpse of Our School</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
