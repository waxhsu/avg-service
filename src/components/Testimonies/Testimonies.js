import './Testimonies.css';
import { TESTIMONIES } from '../../const.js';

function Testimonies() {
    return (
        <div className="Testimonies">
            <div class="header">
                <h1>What our customers say about AVRG</h1>
                <h4>AVRG provides a level of support sometimes</h4>
            </div>
        
            <div className="testimoniesGrid">
            {TESTIMONIES.map((testimonies) => {
                return (
                    <div className='testimoniesContainer'>
                        <div className='userInfo'>
                            <img className='userImage' src={testimonies.src} alt='' />
                            <div className='userDataBox'>
                                <div className='userData'>{testimonies.name}</div>
                                <div className='userData'>{testimonies.rating}</div >
                            </div>
                        </div>
                        <div className='testimoniesDesc'>{testimonies.desc}</div>
                    </div>                    
                );
            })}
            </div>
        </div>
    );
}

export default Testimonies