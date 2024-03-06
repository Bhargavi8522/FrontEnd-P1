import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Order from './Services(Crud)';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

function FormEdit() {

    const navigate = useNavigate();

    const { id } = useParams();
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [gender, setgender] = useState('');
    const [phno, setphno] = useState('');
    const [select, setselect] = useState('');
    const [address, setaddress] = useState('');

    // const baseURL = "http://localhost:3000/OrderForm";

    const NameChangeHandler = (event) => {
        setname(event.target.value);
        // console.log(event.target.value);
    };
    const EmailChangeHandler = (event) => {
        setemail(event.target.value);
        // console.log(event.target.value);
    };
    const GenderChangeHandler = (event) => {
        setgender(event.target.value);
        // console.log(event.target.value);
    };
    const PhNoChangeHandler = (event) => {
        setphno(event.target.value);
        // console.log(event.target.value);
    };
    const SelectChangeHandler = (event) => {
        setselect(event.target.value);
        // console.log(event.target.value);
    };
    const AddressChangeHandler = (event) => {
        setaddress(event.target.value);
        // console.log(event.target.value);
    };

    const fetchorderdetails = () => {
        //     // axios.get(baseURL + '/Booking')
        //     // connected to services
        Order.getorderbyid(id)
            .then(response => {
                // console.log("Data fetched successfully:", response.data);
                const Data = response.data;
                setname(Data.name);
                setemail(Data.email);
                setgender(Data.gender);
                setphno(Data.phno);
                setselect(Data.select);
                setaddress(Data.address);
            })
            .catch(error => {
                // console.error("Error fetching data:", error);
                alert("An error occurred while fetching data: " + error.message);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        Order.editorder(id, {
            name: name,
            email: email,
            gender: gender,
            phno: phno,
            select: select,
            address: address
        })
            .then(() => {
                alert("customer details updated");
                navigate("/List");
            })
            .catch(error => {
                alert("error occured" + error)
            })
    };

    useEffect(() => { if (id) fetchorderdetails(id); }, [id]);

    return (
        <div className="abc">
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
                                <Form.Check type="radio" label="Male" name="formHorizontalRadios" id="formHorizontalRadios1" />

                                <Form.Check type="radio" label="Female" name="formHorizontalRadios" id="formHorizontalRadios2" />

                                <Form.Check type="radio" label="Others" name="formHorizontalRadios" id="formHorizontalRadios3" />
                            </Form.Group>

                            <Form.Group className='d-flex gap-3 pb-3' controlId="formGroupPhNo">
                                <Form.Label>Ph_No:</Form.Label>
                                <Form.Control type="Number" placeholder="Ph No" value={phno} onChange={PhNoChangeHandler} />
                                <Form.Control.Feedback type="invalid">Please Enter 10digits Ph No.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Select className='d-flex gap-3 pb-2' controlId="formGroupSelect" placeholder="plz select type" value={select} onChange={SelectChangeHandler}>
                                <option value="1">Frames</option>
                                <option value="2">Mugs</option>
                                <option value="3">Lamps</option>
                                <option value="4">Telepathy</option>
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
    )
}

export default FormEdit;