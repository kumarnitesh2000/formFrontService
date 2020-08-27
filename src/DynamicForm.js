import React from 'react';
import Button from '@material-ui/core/Button';
import TextFields from './TextFields';
import Choice from './Choice';
import FileUpload from './FileUpload';
import DateTime from './DateTime';

function DynamicForm({template}) {
    console.log("Hello");
    var temp = [];
    var comp;
    var c= template.field.field_label;
        for(var i = 0; i < c.length ; i++){
            if(c[i] === "phone")
                comp = <TextFields label="Phone" description="Enter your phone no." type="number" />
            else if(c[i] === "email") 
                comp = <TextFields label="Email" description="Enter your Email Address" type="text" />
            else if(c[i] === "Name")
                comp = <TextFields label="Name" description="Enter your name" type="text" />
            else if(c[i] === "Fathers Name")
                comp = <TextFields label="Father's name" description="Enter your Father's name." type="textr" />
            else if(c[i] === "Gender")
                comp = <Choice label="Gender" description="Choose any One" option_labels={template.field.field_type_list[4].options} />
            else if(c[i] === "CV")
                comp = <FileUpload label="Resume" description="Your CV File" type="file"/>
            else
                comp = <DateTime label="project start" description="enter date and time"/>
            temp.push(comp);
            console.log(temp);
        }
        
    return (
        <div id="here">
            {/*Use this template and create form*/}
            {temp}
            {/*Code Above use the template named props for form creation*/}

        {/*This is Submit Button*/}    
        <Button variant="contained" color="secondary" size="large" value="submit" style={{marginTop:'10px', width:'40%', marginBottom:'10px'}}>Submit</Button>            
        </div>
    );
}

export default DynamicForm;
