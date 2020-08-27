import React from 'react';
import './Select.css';

function Select({label,description,option_labels,ismultiple}) {
    return (
        <div className="selectblock">
            <div className="selectblock__help">
                <label>{label}</label>
                <p>{description}</p>
            </div>
            <div className="selectblock__input">
            
           {
               ismultiple ? (<React.Fragment><select name={label} id={label} multiple>
                   {option_labels.map( (opt)=>(
                   <option value={opt}>{opt}</option>
                   ))
                   }
               </select>
               </React.Fragment>) : (<select name={label} id={label}>
                {option_labels.map( (opt)=>(
                   <option value={opt}>{opt}</option>
                   ))
                   }
               </select>)
           }
                
                
         
        
            </div>
        </div>
    );
}

export default Select;