import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container,Carousel,Card,Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
function Navigation() {
  return (
    <>
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Ideal Café</Navbar.Brand>
       
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#menu">Menu</Nav.Link>
          <Nav.Link href="#offers">Offers</Nav.Link>
          <Nav.Link href="#locations">Locations</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          
        </Nav>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="me-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        
      </Container>
    </Navbar>


    
    <Container fluid>
      {/* Hero Banner */}
      <section id="home">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tse3.mm.bing.net/th?id=OIP.aDjj_Cy5KXYVTF4UC0pjJgHaIN&pid=Api&P=0&h=180"
              alt="Award-Winning Flavor 1"
              style={{width:"100px",height:"550px"}}
            />
            
            <Carousel.Caption>
              <h3>Award-Winning Flavor 1</h3>
              <p>Smooth and buttery ice cream with crunchy butterscotch bites. A timeless classic loved by all ages.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tse4.mm.bing.net/th?id=OIP.ZysvxH_f022B3eazSpah_AHaKe&pid=Api&P=0&h=180"
              alt="Award-Winning Flavor 2"
              style={{width:"100px",height:"550px"}}
            />
            <Carousel.Caption>
              <h3>Award-Winning Flavor 2</h3>
              <p>Creamy strawberry ice cream made with real strawberry pulp, topped with fresh strawberries and a swirl of strawberry syrup.</p>
            </Carousel.Caption>
          </Carousel.Item>
       
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tse3.mm.bing.net/th?id=OIP.4OKvX5BVubG_Sq1okEnqAAHaEw&pid=Api&P=0&h=180"
              alt="Award-Winning Flavor 3"
              style={{width:"100px",height:"550px"}}
            />
            
            <Carousel.Caption>
              <h3>Award-Winning Flavor 3</h3>
              <p>A delightful mix of strawberry, chocolate, and mango—three classic flavors in one scoop of joy!</p>
            </Carousel.Caption>
          </Carousel.Item>
        
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tse3.mm.bing.net/th?id=OIP.Ccypa9CgmieDgTYjNQjEdgHaEo&pid=Api&P=0&h=180"
              alt="Award-Winning Flavor 4"
              style={{width:"100px",height:"550px"}}
            />
            
            <Carousel.Caption>
              <h3>Award-Winning Flavor 4</h3>
              <p>Bursting with the richness of ripe Alphonso mangoes, this tropical delight is creamy, fruity, and irresistibly refreshing. Every scoop feels like summer in a cone!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tse4.mm.bing.net/th?id=OIP.tVD1ThVHTYH9XlRkiXceRwHaEK&pid=Api&P=0&h=180"
              alt="Award-Winning Flavor 5"
              style={{width:"100px",height:"550px"}}
            />
            
            <Carousel.Caption>
              <h3>Award-Winning Flavor 5</h3>
              <p>Indulgent chocolate ice cream packed with chocolate chips and fudge swirls. A must-have for every chocoholic.

</p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
      </section>

      {/* Popular Dishes */}
      <section id="menu">
      
        <h2 className="mt-5">Popular Dishes</h2>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.FRxGm-k14xLorEAlCtXJLgHaHa&pid=Api&P=0&h=180" />
              <Card.Body>
                <Card.Title>Gadbad Ice Cream</Card.Title>
                <Card.Text>
                A layered medley of multiple ice cream scoops, fruits, dry fruits, jelly, and nuts served in a tall glass. A Mangalorean classic that’s both a visual and flavorful treat!
                </Card.Text>
                <div>⭐⭐⭐</div>
                
                <Button variant="primary" className="mt-2" onClick={() => alert("Ordered Successfully!!!")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
        
      </section>

      {/* Customer Testimonials */}
      <section>
       
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
            <Card.Img variant="top" src="https://tse4.mm.bing.net/th?id=OIP.ytIayKCqgIfGucnaxcbpjAHaHa&pid=Api&P=0&h=180" />
            
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>
                  "The best ice cream experience I've ever had!"
                </Card.Text>
                <div>⭐⭐⭐⭐⭐</div>
                <Button variant="primary" className="mt-2" onClick={() => alert("Ordered Successfully!!!")}>Order Now</Button>

              </Card.Body>
            </Card>
          </Col>
       
        </Row>
      </section>


      <section>
      
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.mdV345mBRVlYueFKYnTYlwHaFj&pid=Api&P=0&h=180" />
              <Card.Body>
                <Card.Title>Dilkush Ice Cream</Card.Title>
                <Card.Text>
                A delightful fusion of coconut, sweet syrup, dry fruits, and creamy vanilla ice cream—rich in both tradition and taste. Truly dil ko khush karne wala.
                </Card.Text>
                <div>⭐⭐⭐⭐</div>
                <Button variant="primary" className="mt-2" onClick={() => alert("Ordered Successfully!!!")}>Order Now</Button>

              </Card.Body>
            </Card>
          </Col>
         
        </Row>
      </section>


      <section>
        
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="https://tse4.mm.bing.net/th?id=OIP.6xLVeMc_lCjaIw7NSAbLSQHaJ5&pid=Api&P=0&h=180" />
              <Card.Body>
                <Card.Title>Tiramisu Ice Cream</Card.Title>
                <Card.Text>
                 A popular pastry filled with sweetened coffee flavour.
                </Card.Text>
                <div>⭐⭐⭐</div>
                <Button variant="primary" className="mt-2" onClick={() => alert("Ordered Successfully!!!")}>Order Now</Button>

              </Card.Body>
            </Card>
          </Col>
         
        </Row>
      </section>


      <section id="offers" className="my-5">
  <h2 className="text-center mb-4">🎁 Exclusive Offers</h2>

  <Card className="mb-4 shadow bg-warning text-dark">
    <Card.Body>
      <Card.Title>🎊 Happy Hours</Card.Title>
      <Card.Text>
        Get <strong>50% off</strong> on all flavors between <b>3 PM to 5 PM</b> daily!
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="mb-4 shadow bg-info text-white">
    <Card.Body>
      <Card.Title>🌞 Summer Specials</Card.Title>
      <Card.Text>
        Buy 2 scoops and get 1 free during the summer season!
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="mb-4 shadow bg-success text-white">
    <Card.Body>
      <Card.Title>🍨 Weekend Bonanza</Card.Title>
      <Card.Text>
        Free toppings on all ice cream orders above ₹200 on weekends.
      </Card.Text>
    </Card.Body>
  </Card>
</section>



  

<section id="contact" className="mt-5 mb-5">
  <h2>Contact Us</h2>
  <Form>
    <Row className="mb-3">
      <Col md={6}>
        <Form.Group controlId="contactName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="contactEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
      </Col>
    </Row>

    <Form.Group className="mb-3" controlId="contactMessage">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" rows={4} placeholder="Type your message here..." />
    </Form.Group>

    <Button variant="primary" type="submit" onClick={() => alert("Message sent!")}>
      Submit
    </Button>
  </Form>
</section>
<section id="locations">
  <h2 className="mt-5 mb-4">Our Locations</h2>
  <Col md={6}>
  <Card>
    <Card.Body>
      <Card.Title>Mangalore - Main Branch</Card.Title>
      <Card.Text>Hampankatta, Mangalore, Karnataka 575001</Card.Text>
      <div className="ratio ratio-4x3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.785620495218!2d74.83662127456055!3d12.870333318039217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35092aa189c69%3A0x4f708ee0f8b3e539!2sHampankatta%2C%20Mangaluru%2C%20Karnataka%20575001!5e0!3m2!1sen!2sin!4v1713098998582!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Card.Body>
  </Card>
</Col>
<Col md={6}>
  <Card>
    <Card.Body>
      <Card.Title>Ideal Café - Lalbagh</Card.Title>
      <Card.Text>Lalbagh, Mangalore, Karnataka 575003</Card.Text>
      <div className="ratio ratio-4x3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.6680276562674!2d74.84649987456057!3d12.878760217889672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b98c87e11f3%3A0x2ae17e3f249ff419!2sLalbagh%2C%20Mangaluru%2C%20Karnataka%20575003!5e0!3m2!1sen!2sin!4v1713099154166!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Card.Body>
  </Card>
</Col>

</section>


</Container>
</>
);
};

export default Navigation;

