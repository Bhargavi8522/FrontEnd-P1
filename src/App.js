import './App.css';
import {BrowserRouter as Router,Routes,Link,Route} from "react-router-dom";
import Login from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import MainPage from './Components/MainPage';
import Navbar1 from './Components/navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import ContactUS from './Components/Contact';
import Services from './Components/Services';
import OrderForm from './Components/OrderForm';
import List from './Components/List';
import FormEdit from './Components/FormEdit';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/' element={<MainPage/>}></Route>
        <Route exact path='/register' element={<RegisterForm/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Navbar' element={<Navbar1/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/aboutus' element={<AboutUs/>}/>
        <Route exact path='/contact' element={<ContactUS/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/OrderForm' element={<OrderForm/>}/>
        <Route exact path='/List' element={<List/>}/>
        <Route exact path='/edit/:id' element={<FormEdit/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
