import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar1 from "./navbar";
import Order from "./Services(Crud)";

function OrderForm() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phno, setPhNo] = useState('');
    const [options, setOptions] = useState('');
    const [address, setAddress] = useState('');

    // const baseURL = "http://localhost:3000/OrderForm";

    const NameChangeHandler = (event) => {
        setName(event.target.value);
        // console.log(event.target.value);
    };
    const EmailChangeHandler = (event) => {
        setEmail(event.target.value);
        // console.log(event.target.value);
    };
    const GenderChangeHandler = (event) => {
        setGender(event.target.value);
        console.log(event.target.value);
    };
    const PhNoChangeHandler = (event) => {
        setPhNo(event.target.value);
        // console.log(event.target.value);
    };
    const OptionsChangeHandler = (event) => {
        setOptions(event.target.value);
        // console.log(event.target.value);
    };
    const AddressChangeHandler = (event) => {
        setAddress(event.target.value);
        // console.log(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // axios.post(baseURL, {
        //     name: name,
        //     email: email,
        //     gender: gender,
        //     ph_no: ph_no,
        //     select: select,
        //     address: address
        // })

        Order.createorder({
            name: name,
            email: email,
            gender: gender,
            phno: phno,
            options: options,
            address: address
        })

            .then(() => {
                alert("Form " + name + " added!");

                navigate("/home");
            }).catch(error => {
                alert("error===" + error);
            });

    }

    return (
        <div className="abc">
            <Navbar1></Navbar1>
            <div className='d-flex justify-content-center vh-100 align-items-center'>
                <Card border="secondary" style={{ width: '25rem' }}>
                    <Card.Header style={{ textAlign: "center" }}><h3>Order Form</h3></Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>

                            <Form.Group className='d-flex gap-3 pb-3' controlId="validationCustom01">
                                <Form.Label className='mt-2'>Name:
                                </Form.Label>
                                <Form.Control required type="text" placeholder="Name" value={name} onChange={NameChangeHandler} defaultValue="Enter Name" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className='d-flex gap-3 pb-3' controlId="validationCustomEmail">
                                <Form.Label>Email:</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control type="email" placeholder="Email" value={email} onChange={EmailChangeHandler} aria-describedby="inputGroupPrepend" required />
                                    <Form.Control.Feedback type="invalid"> Please choose Correct Email.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className='d-flex gap-3 pb-3' controlId="validationCustomGender">
                                <Form.Label>Gender:</Form.Label>
                                <Form value={gender} onChange={GenderChangeHandler} />
                                <Form.Check type="radio" label="Male" value= "Male" checked={gender === "Male"} onChange={GenderChangeHandler} name="formHorizontalRadios" id="formHorizontalRadios1" />

                                <Form.Check type="radio" label="Female" value="Female" checked={gender === "Female"} onChange={GenderChangeHandler} name="formHorizontalRadios" id="formHorizontalRadios2" />

                                <Form.Check type="radio" label="Others" value="Others"checked={gender === "Others"} onChange={GenderChangeHandler} name="formHorizontalRadios" id="formHorizontalRadios3" />
                            </Form.Group>

                            <Form.Group className='d-flex gap-3 pb-3' controlId="formGroupPhNo">
                                <Form.Label>Ph_No:</Form.Label>
                                <Form.Control type="Number" placeholder="Ph No" value={phno} onChange={PhNoChangeHandler} />
                                <Form.Control.Feedback type="invalid">Please Enter 10digits Ph No.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Select className='d-flex gap-3 pb-2' as='select' controlId="formGroupSelect" placeholder="plz select type" value={options} onChange={OptionsChangeHandler}>
                                <option value="Frames">Frames</option>
                                <option value="Mugs">Mugs</option>
                                <option value="Lamps">Lamps</option>
                                <option value="Telepathy">Telepathy</option>
                                
                            </Form.Select>

                            <Form.Group className='d-flex gap-3 mt-3 pb-3' controlId="validationCustom03">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" value={address} required onChange={AddressChangeHandler} />
                                <Form.Control.Feedback type="invalid">Please provide a valid Address.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className='d-flex gap-3 pb-3'>
                                <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
                            </Form.Group>

                            <div className="d-flex justify-content-center align-items-center">
                                <Link to="/Home">
                                    <Button variant="third" className='justify-content-between' style={{ width: "80px",marginRight:"20px"}} type="submit">Back</Button>
                                </Link>
                                <Button type="submit">Submit form</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default OrderForm;