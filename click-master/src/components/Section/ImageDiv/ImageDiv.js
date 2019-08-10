import React from 'react';
import './ImageDiv.css';

function Image({ id, src, onClick }) {
    return (
        <div className="Image-div" id={id} onClick={onClick}>
            <img className="Image-size" src={src} alt="" id={id} />
        </div>
    );
}

export default Image;
