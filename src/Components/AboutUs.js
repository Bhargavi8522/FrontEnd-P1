import Navbar1 from "./navbar";
import { Card } from "react-bootstrap";

function AboutUs() {
  return (

    <div className="abc">
      <Navbar1></Navbar1>
      <div className="Abt">
      <div className="d-flex justify-content-center">
        <div className='mt-4 ms-5'style={{width:"1000px",background:"transparent"}}>
          <Card.Text className="Abttext " >
            <h3 style={{textAlign:"center", fontFamily:"serif"}}>AboutUs</h3>
            <p>Framing Studio is a unique entity that came up with a vision of beautifying the memories of people who are looking forward.
              We create happiness by printing the most cherished memories of your life on frames canvas and acrylic.
              We are Situated in the small city of hyderabad and heading towards reaching all our customers easily.
              We work with a small team with a passion for making it a big brand by providing quality in everything.
              We are committed to creating handmade photo frames, canvas, and acrylic with the best quality papers, splendid designs, and personalized care.
              Right from traditional frames to the modern canvas and acrylic prints we provide you with tremendous options to adore your memories.</p>
          </Card.Text>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;