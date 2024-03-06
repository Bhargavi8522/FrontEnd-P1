import { Card } from "react-bootstrap";
import Navbar1 from "./navbar";

function Home() {
    return (
      <div className="abc">
        <Navbar1></Navbar1>
      <Card>
        <div className="Himg"></div>
        {/* <Card.Img src="/images/Home.jpg"/> */}
        <Card.ImgOverlay>
          <Card.Text  className="Htext">
            &nbsp;&nbsp;&nbsp;&nbsp;Every frames tells a story<br></br> Let us help you tell yours with<br></br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Style and Grace.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
    );
  }
  
  export default Home;