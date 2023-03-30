import './Service.css';
import { SERVICE } from '../../const.js';

function Service() {
    return (
        <div className="Service">
            <div class="header">
                <h1>Services that you can expect</h1>
                <h4>it's aight</h4>
            </div>
        
            <div className="serviceGrid">
            {SERVICE.map((service) => {
                return (
                    <div className='serviceContainer'>
                            <h3>{service.name}</h3>
                            <div className='languageText'>

                        <div className='serviceBox'>
                        
                            <img className='contentImage' src={service.src} alt='' />
                            <p>{service.desc}</p>
                        
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