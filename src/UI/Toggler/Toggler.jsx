import React from 'react';
import './Toggler.css'
import sol from '../../assets/images/iconsol.png';
import moon from '../../assets/images/moon.svg';
function Toggler({click, togglerspan}) {
    return (
        <div className="togller" onClick={click}>
            <span className={togglerspan}></span>
            <div className="sol"><img src={sol} alt="" className='img'/></div>
            <div className="moon"><img src={moon} alt="" className='img'/></div>
        </div>
    )
}

export default Toggler