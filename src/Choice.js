import React from 'react';
import './Choice.css';
function Choice({label,description,options_label}) {
  
    return (
        <div className="choiceblock">
            <div className="choiceblock__help">
                <label>{label}</label>
                <p>{description}</p>
            </div>

            <div className="choiceblock__input">
                {
                    options_label.map( (opt) =>(
                        <React.Fragment>
                            <input type="radio" id={opt} name={label} value={opt} />
                            <label>{opt}</label>
                        </React.Fragment>
                    )
                    )}
            </div>
        </div>
        
    );
}

export default Choice;