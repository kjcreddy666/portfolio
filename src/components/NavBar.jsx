import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function NavBar() {
  let [activeLink, setActiveLink] = useState('home');
  let [scroll, setScroll] = useState(false);

  useEffect( ()=> {
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll",onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scroll ? "scrolled" : ""}>

      <Container>
        <Navbar.Brand href="#home">
          {/* <h1 className={"logo"}>Jay</h1> */}
          <img src={logo}></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink == "home" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>

            <Nav.Link href="#about" className={activeLink == "about" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink('about')}>About</Nav.Link>

            <Nav.Link href="#skills" className={activeLink == "skills" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>

            <Nav.Link href="#projects" className={activeLink == "projects" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

            <Nav.Link href="#cources" className={activeLink == "cources" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink('cources')}>Cources</Nav.Link>

            <Nav.Link href="#certfi" className={activeLink == "certifi" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink('certifi')}>Certifications</Nav.Link>

          </Nav>

          <span className="navbar-text">

              <div className="social-icon">
                <a href="#"> <img src={navIcon1} alt="" /> </a>
                <a href="#"> <img src={navIcon2} alt="" /> </a>
                <a href="#"> <img src={navIcon3} alt="" /> </a>
              </div>

              <button className='vvd' onClick={()=> {console.log("Button clickef")}}><span>Let's connect</span></button>

            </span>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default NavBar;