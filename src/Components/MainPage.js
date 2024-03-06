import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

function MainPage() {
  // const navigate = useNavigate();


  const submitActionHandler = (event) => {
      event.preventDefault();
    //  navigate("/register");
      //  console.log("clicked")
};
  return (
    <div>
      <Card className=" text-white">
        <Card.Img src="/img/Main.jpg" />
        <Form  onSubmit={submitActionHandler} >
        <Card.ImgOverlay>
          <Card.Text className='text'>
            <b><i><pre >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;More than just frames, <br></br>
              We offer a  gateway to your personal <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;art collection.</pre></i></b>
            <div className='mt-4 g-5' style={{marginLeft:"100px"}}>
            <Button type="button" variant='light'><Link to="/register" style={{textDecoration:"none",color:"black"}}>Register</Link></Button>
            <Button type="button" variant='light' style={{marginLeft:"40px"}} ><Link to="/login" style={{textDecoration:"none",color:"black"}} >Log-in</Link></Button>
            </div>
          </Card.Text>
        </Card.ImgOverlay>
        </Form>
      </Card>
    </div>
  );
}

export default MainPage;