//import logo from './logo.svg';
import "./App.css";
import {Link, Outlet} from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      
      <nav>
      <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        
      </nav>
      <h1>About Us</h1>
      <Outlet />
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  )

}

export function Contact() {
  return (
    <div>
      <nav>
      <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        
      </nav>
      <h1>Contact us</h1>
    </div>
  );
}

export function App() {
  return <Home />
}


