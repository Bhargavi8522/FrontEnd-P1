import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserServices from './UserServices';

function Login() {

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     navigate("/home")
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    //     setValidated(true);
    // };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const EmailChangeHandler = (event) => {
        setEmail(event.target.value);
        // console.log(event.target.value);
    };
    const PasswordChangeHandler = (event) => {
        setPassword(event.target.value);
        // console.log(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        UserServices.getUser(email)
            .then(response => {
                const User = response.data.find((User) => User.email === email && User.password === password);
                if (User) { navigate("/home") } else { alert("Login failed"); }
            }).catch(error => { console.log("error", error) })
    }

    const navigate = useNavigate();

    return (
        <div style={{ backgroundImage: "URL(/img/logimg.jpg)", backgroundSize: "cover" }}>
            <div className='d-flex justify-content-center vh-100 align-items-center'>
                <Card border="secondary" style={{ width: '25rem' }}>
                    <Card.Header><h3 style={{textAlign:"center"}}>Login Form</h3></Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>

                            <Form.Group className='d-flex gap-3 pb-3' controlId="validationCustomEmail">
                                <Form.Label>Email:</Form.Label>
                                <InputGroup hasValidation required>
                                    <Form.Control type="email" placeholder="Email" onChange={EmailChangeHandler} value={email} aria-describedby="inputGroupPrepend" required />
                                    <Form.Control.Feedback type="invalid"> Please choose Correct Email.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className='d-flex gap-3 pb-3' controlId="formGroupPassword" required>
                                <Form.Label>Password:</Form.Label>
                                <Form.Control required type="password" onChange={PasswordChangeHandler} value={password} placeholder="Password" />
                                <Form.Control.Feedback type="invalid">Please enter min 8 charecters.</Form.Control.Feedback>
                            </Form.Group>

                            <Button type="submit">Log-in</Button>
                            <Button type="submit" className='ms-2 color-white'><Link to="/" style={{color:"white"}}>Back</Link></Button>

                            <p>If you don't have an account Please <a href="/register">Register</a></p>

                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Login;