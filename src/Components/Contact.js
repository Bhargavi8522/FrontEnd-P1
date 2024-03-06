import Card from 'react-bootstrap/Card';
import Navbar1 from "./navbar";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function ContactUS() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }
    return (
        <div className="abc">
            <Navbar1></Navbar1>
            <div className='cont'>
                <Card border="info" style={{ width: '28rem', height: '30rem' }}>
                    <Card.Body>
                        <h2 style={{ textAlign: 'center' }}>Contact-us</h2><br></br>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className='d-flex gap-3 pb-3' controlId="validationCustom01">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control required type="text" placeholder="Name" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className='d-flex gap-3 pb-3' controlId="validationCustomEmail">
                                <Form.Label>EMail:</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control type="email" placeholder="E-Mail" aria-describedby="inputGroupPrepend" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please write a valid email.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                        <InputGroup>
                            <Form.Control as="textarea" placeholder='Suggetions' aria-label="With textarea" />
                        </InputGroup><br></br>

                        <Button style={{marginLeft:'163px'}} type="submit">Submit</Button><br></br><br></br>

                        <h5 style={{textAlign:'center'}}>You can also contact us through </h5>

                        <div className='icons'>
                        <a href="" style={{fontSize:30, marginLeft:135}}><FaFacebookSquare /></a>
                        <a href="" style={{fontSize:30, marginLeft:20}}><RiInstagramFill /></a>
                        <a href="" style={{fontSize:30, marginLeft:20}}><FaSquareTwitter/></a>
                        </div>

                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default ContactUS;
