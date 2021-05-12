import React from 'react';
import Tilt from 'react-tilt';
import Campusnity from './Campusnity.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner ba3"><img alt='logo' src={Campusnity}/></div>
            </Tilt>
        </div>
    );
};

export default Logo;