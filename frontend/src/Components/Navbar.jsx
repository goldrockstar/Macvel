import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar expand="xl" className="bg-body-tertiary">
      <Container className='nav-container'>
        <Navbar.Brand href="/"><img src='assets/Macvellogo.png' className='logo-nav' alt='logo' style={{width:'80px' , height:'80px', marginRight:'80px'}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{color:'#28A745',fontWeight:'500'}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{fontWeight:'500'}}>About Us</Nav.Link>
            <Nav.Link href="/TrainingProgrames" style={{fontWeight:'500'}}>Training Programes</Nav.Link>
            <Nav.Link href="/service" style={{fontWeight:'500'}}>Services</Nav.Link>
            <Nav.Link href="/portfolio " style={{fontWeight:'500'}}>Portfolio & Projects</Nav.Link> 
            <Nav.Link href="/contact" style={{fontWeight:'500'}}>Contact Us</Nav.Link>

          </Nav>
          <div className='icons'>
            <button className='login-b' style={{ background:"#28A745",color:"#fff",padding:"10px",width:"100px",border:"none",fontWeight:"600"}}>Login</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );    
}

export default BasicExample;