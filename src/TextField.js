import React from 'react';
import './TextField.css';

function TextField({label, description,type}) {
    return (
        <div className="textblock">
            <div className="textblock__help">
                <label>{label}</label>
                <p>{description}</p>
            </div>
            <div className="textblock__input">
                <input type={type} />
            </div>
        </div>
    );
}

export default TextField;