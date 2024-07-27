import { Carousel } from 'react-bootstrap';
import school from '../assets/school_tour.mp4';
import schoolPhoto from '../assets/school.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Home = () => {
  return (
    <div id="home" className="mt-5">
      <header className="text-center py-5 bg-light">
        <h1 className="display-4">Welcome to Springdale Public School</h1>
        <p className="lead">Where we nurture young minds for a brighter future.</p>
      </header>
      
        <Carousel className="mt-4 reduced-height-carousel" >
          <Carousel.Item>
            <img src={schoolPhoto} className="d-block w-100" alt="School" />
          </Carousel.Item>
          
          <Carousel.Item>
            <video className="d-block w-100" autoPlay muted loop >
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

export default Home;
