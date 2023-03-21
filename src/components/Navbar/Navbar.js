import './Navbar.css';

function Navbar(){
  return (
    <div className="Navbar">
      <div className='logo'>
        <img alt='squareLogo' />
      </div>
      
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

