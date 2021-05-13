import React from 'react';

const Navigation = ({onRouteChange}) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div className='f3 link dim black underline pa3 pointer'>
          <p onClick={() => onRouteChange('signin')} >Sign Out</p>
        </div>
      </nav>
    );
};

export default Navigation;