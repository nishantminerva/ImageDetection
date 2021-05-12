import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return(
        <div className='center'>
            <img alt='' id='inputimage'  src={imageUrl}/>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow , left: box.leftCol}} />
        </div>
    );
};

export default FaceRecognition;