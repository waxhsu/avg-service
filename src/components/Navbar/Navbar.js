import './Navbar.css';
import logo from '../../img/logo.png';

function Navbar(){
  return (
    <div className="Navbar">
      <img className='logo' alt='squareLogo' src={logo} />
      
      <div className='mainOptions'>
        <div>
            <a className="Navbar-options" href="" target="_blank">Services</a>
        </div>
        <div>
            <a className="Navbar-options" href="" target="_blank">Testimonies</a>
        </div>
        <div>
            <a className="Navbar-options" href="" target="_blank">Company</a>
        </div>
        <div>
            <a className="Navbar-options" href="" target="_blank">Contact</a>
        </div>
      </div>

      <div className='rightSide'>
          <a id='login' className='button' href="" target="_blank">Login</a>
          <a id='signUp' className='button' href="" target="_blank">Get started</a>
      </div>
    </div>


  );
}

export default Navbar;
/////

