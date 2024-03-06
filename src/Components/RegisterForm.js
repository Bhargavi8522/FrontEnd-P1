import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserServices from './UserServices';
// import MainPage from '../MainPage';

function RegisterForm() {
    const navigate = useNavigate();

    const [name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [phno, setPhNo] = useState('');
    const [address, setAddress] = useState('');

    const baseURL = "http://localhost:3000/Form";

    const NameChangeHandler = (event) => {
        setFullName(event.target.value);
        // console.log(event.target.value);
    };
    const EmailChangeHandler = (event) => {
        setEmail(event.target.value);
        // console.log(event.target.value);
    };
    const PasswordChangeHandler = (event) => {
        setPassword(event.target.value);
        // console.log(event.target.value);
    };
    const GenderChangeHandler = (event) => {
        setGender(event.target.value);
        // console.log(event.target.value);
    };
    const PhNoChangeHandler = (event) => {
        setPhNo(event.target.value);
        // console.log(event.target.value);
    };
    const AddressChangeHandler = (event) => {
        setAddress(event.target.value);
        // console.log(event.target.value);
    };

    const handleSubmit = (event) => {
            event.preventDefault();

            // axios.post
            UserServices.createUser( {
                name: name,
                email: email,
                password: password,
                gender: gender,
                phno: phno,
                address: address
            })
        
                .then(() => {
                    alert("Form " + name + " added!");

                    navigate("/");
                }).catch(error => {
                    alert("error===" + error);
                });

        }

    //  console.log("clicked")

    // StudentService.createStudent({ name: studentName, role: studentRole })
    //     .then((response) => {
    //         alert("WebsiteStudent " + ":" + studentName + ":" + studentRole + " added!");
    //         // console.log(response)
    //         navigate("/");
    //     }).catch(error => {
    //         alert("error===" + error);
    //     });


return (
    <div style={{backgroundImage:"URL(/img/regimg.jpg)", backgroundSize:"cover"}}>
    <div className='d-flex justify-content-center vh-100 align-items-center'>
        <Card border="secondary" style={{ width: '25rem' }}>
            <Card.Header><h3 style={{textAlign:"center"}}>Registration Form</h3></Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className='d-flex gap-3 pb-3' controlId="validationCustom01">
                        <Form.Label className='mt-2'>Full_Name:
                        </Form.Label>
                        <Form.Control required type="text" placeholder="Full Name" value={name} onChange={NameChangeHandler} defaultValue="Enter Full Name" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='d-flex gap-3 pb-3' controlId="validationCustomEmail">
                        <Form.Label>Email:</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="email" placeholder="Email" value={email} onChange={EmailChangeHandler} aria-describedby="inputGroupPrepend" required />
                            <Form.Control.Feedback type="invalid"> Please choose Correct Email.</Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className='d-flex gap-3 pb-3' controlId="formGroupPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} required onChange={PasswordChangeHandler} />
                        <Form.Control.Feedback type="invalid">Please enter min 8 charecters.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='d-flex gap-3 pb-3' controlId="validationCustomGender">
                        <Form.Label value={gender} required onChange={GenderChangeHandler} >Gender:</Form.Label>
                        <Form.Check type="radio" label="Male" name="formHorizontalRadios" id="formHorizontalRadios1" />

                        <Form.Check type="radio" label="Female" name="formHorizontalRadios" id="formHorizontalRadios2" />

                        <Form.Check type="radio" label="Others" name="formHorizontalRadios" id="formHorizontalRadios3" />
                    </Form.Group>

                    <Form.Group className='d-flex gap-3 pb-3' controlId="formGroupPhNo">
                        <Form.Label>Ph_No:</Form.Label>
                        <Form.Control type="Number" placeholder="Ph No" value={phno} required onChange={PhNoChangeHandler} />
                        <Form.Control.Feedback type="invalid">Please Enter 10digits Ph No.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='d-flex gap-3 pb-3' controlId="validationCustom03">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" value={address} required onChange={AddressChangeHandler} />
                        <Form.Control.Feedback type="invalid">Please provide a valid Address.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='d-flex gap-3 pb-3'>
                        <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
                    </Form.Group>

                    <Button type="submit">Submit form</Button>
                    <Button type="submit" className='ms-3' onClick={() => navigate("/")}>Cancel</Button>

                    <p>If you already have an account Please <a href="Login">Login</a></p>

                </Form>
            </Card.Body>
        </Card>

        </div>
    </div>
);
};

export default RegisterForm;