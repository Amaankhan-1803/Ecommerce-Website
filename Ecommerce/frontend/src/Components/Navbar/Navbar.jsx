import './Navbar.css';
import logo from '../Assets/logo.png'
import bag from '../Assets/bag.png'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Navbar className='container-fluid'>
        <Navbar.Brand className='d-flex justify-content-center align-items-center ps-2'>
          <Link to= '/'><img src={logo} width="75" height="75"className="log_img" alt="Logo" />
          <span className="logo-text">E-Kart</span></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto menu_item">
            <Nav.Link><Link to= '/'>Home</Link></Nav.Link>
            <NavDropdown  title= {<Link to ='/shop'>Shop</Link>} id="basic-nav-dropdown" className='drop-item'>
            <NavDropdown.Item ><Link to = '/fashion'>Fashion</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to ='/decor'>Decor</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to = '/kitchen' >Kitchen Appliances</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to = '/sports' >Sports</Link></NavDropdown.Item>
            </NavDropdown> 
          < Nav.Link><Link to = '/about-us'>About Us</Link></Nav.Link>
          < Nav.Link><Link to = '/contact-us' >Contact Us</Link></Nav.Link>
          </Nav>
          <div className=" nav_login_cart d-flex gap-3">
          <Link to = '/login' ><Button className='sign-btn'>Sign In</Button></Link>
          <Link to = '/cart' ><img className='bag_btn me-4' width="40" height="40" src={bag} alt="cart" />
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill ">0</span></Link>
          </div>
        </Navbar.Collapse>
      </Navbar>  
    );
  };
export default NavBar
