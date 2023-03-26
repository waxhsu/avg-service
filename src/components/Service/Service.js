import './Service.css';
import { SERVICE } from '../../const.js';

function Service() {
    return (
        <div className="Service">
            <div class="header">
                <h1>Our Services</h1>
            </div>
        
            <div className="serviceGrid">
            {SERVICE.map((service) => {
                return (
                    <div className='serviceContainer'>
                            <h3>{service.name}</h3>
                            <div className='languageText'>

                        <div className='serviceBox'>
                        <a href={service.link} target='_blank' rel='noopener noreferrer'>
                            <img className='contentImage' src={service.src} alt='' />
                            <p>{service.desc}</p>
                        </a>
                        <a href={service.link}> learn more </a>
                        </div>
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default Service