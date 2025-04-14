import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function BasicExample() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  }
 
  return (
    <Navbar expand="xl" className="bg-body-tertiary">
      <Container className='nav-container'>
        <Navbar.Brand href="/"><img src='assets/Macvellogo.png' className='logo-nav' alt='logo' style={{width:'80px' , height:'80px', marginRight:'80px'}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"  style={{color:'#004AAD',fontWeight:'500'}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{fontWeight:'500'}}>About Us</Nav.Link>
            <Nav.Link href="/TrainingProgrames" style={{fontWeight:'500'}}>Training Programes</Nav.Link>
            <Nav.Link href="/service" style={{fontWeight:'500'}}>Services</Nav.Link>
            {/* <Nav.Link href="/portfolio " style={{fontWeight:'500'}}>Portfolio & Projects</Nav.Link>*/} 
            <Nav.Link href="/contact" style={{fontWeight:'500'}}>Contact Us</Nav.Link>

          </Nav>
          <div className='icons'>
            <button className='login-b' style={{ background:"#004AAD",color:"#fff",padding:"10px",width:"150px",border:"none",fontWeight:"600"}} onClick={handleClick}>Register Now</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );    
}

export default BasicExample;