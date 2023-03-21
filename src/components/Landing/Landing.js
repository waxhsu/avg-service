import './Landing.css';
// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';

function Landing(){
  return (
    <div className="Landing">
      <div className='leftLanding'>
        <div className='infoBox'>Interesting intro and information about this service providing company</div>
        <div className='buttonBox'>
          <a id='login' className='button' href="" target="_blank">Login</a>
          <a id='signUp' className='button' href="" target="_blank">Get started</a>
        </div>
      </div>
      <div className='rightLanding'>
        <img alt='stoicThumbsUp' />
      </div>
    </div>
  )
}

export default Landing;

/* IF I WANT TO ADD IMAGE */
/* {CONTENT.map((item, index) => (
          <div
            key={index}
            style={{
              background: `url('${item.image}') no-repeat center center`,
              backgroundSize: `contain`,
            }}
          ></div>
        ))} */