// src/components/Home.js
import { Carousel } from 'react-bootstrap';
import sportsDay from '../assets/sports_day.jpg';
import scienceExhibition from '../assets/science_exhibition.jpg';
import culturalFest from '../assets/cultural_fest.jpg';

const Home = () => {
  return (
    <div className="home ">
      <header className="text-center py-5 bg-light">
        <h1 className="display-4">Welcome to Springdale Public School</h1>
        <p className="lead">Where we nurture young minds for a brighter future.</p>
      </header>
      <div id="carouselExampleIndicators" className="carousel slide max-height-600" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
            <Carousel className="mt-4">
                <Carousel.Item>
                <img src={sportsDay} className="object-fit-cover d-block w-100" alt="Annual Sports Day" />
                <Carousel.Caption>
                    <h3>Annual Sports Day</h3>
                    <p>Celebrating Excellence in Sports</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={scienceExhibition} className="object-fit-cover d-block w-100" alt="Science Exhibition" />
                <Carousel.Caption>
                    <h3>Science Exhibition</h3>
                    <p>Showcasing Student Innovations</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={culturalFest} className="object-fit-cover d-block w-100" alt="Cultural Fest" />
                <Carousel.Caption>
                    <h3>Cultural Fest</h3>
                    <p>Embracing Diversity and Creativity</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
      </div>
    </div>
  );
};

export default Home;
