import React from 'react';
import Button from '@material-ui/core/Button';

function DynamicForm({template}) {
    return (
        <div>
            {/*Use this template and create form*/}



            {/*Code Above use the template named props for form creation*/}

        {/*This is Submit Button*/}    
        <Button variant="contained" color="secondary" size="large" value="submit" style={{marginTop:'10px', width:'40%', marginBottom:'10px'}}>Submit</Button>            
        </div>
    );
}

export default DynamicForm;