import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoHeart } from "react-icons/go";
import { PiShoppingCart } from "react-icons/pi";

function Navbar1() {
  return (
    <div className='nav'>
      <Nav variant="tabs"className='vw-100'>
        <Nav.Item>
          <Nav.Link href="/home" active>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/aboutus">AboutUs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">ContactUS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/services">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/orderForm">Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/List">List</Nav.Link>
        </Nav.Item>
        <Form inline>
          <Row>
            <Col xs="auto" style={{marginLeft:'720px'}}>
              <Form.Control type="text" placeholder="Search"/>
            </Col>
          </Row>
        </Form>
      
        <a href="" style={{ fontSize: 20, marginLeft:'20px'}}><GoHeart /></a>
        <a href="" style={{ fontSize: 20, marginLeft:'10px'}}><PiShoppingCart /></a>

      </Nav>
    </div>
  );
}

export default Navbar1;