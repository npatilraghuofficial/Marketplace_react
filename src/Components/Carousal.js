import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Carousal() {
  return (

    <div  style={{ margin: '20px' }}>
    <Carousel >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://img.peapix.com/6fdcdc5eef7a4cc0bb397fc22a3e0efa_480.jpg" 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>About Event.</p>
        </Carousel.Caption>
      </Carousel.Item>




    

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.GgVivFX4AsNMLn8qr3w9kgHaEi?pid=ImgDet&rs=1" 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://img.peapix.com/6fdcdc5eef7a4cc0bb397fc22a3e0efa_480.jpg" 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>About Event.</p>
        </Carousel.Caption>
      </Carousel.Item>


        
    </Carousel>
    </div>
  );
}

export default Carousal;