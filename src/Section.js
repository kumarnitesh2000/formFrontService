import React from 'react';
import Button from '@material-ui/core/Button';
import TextFields from './TextFields';
import Select from './Select';
import FileUpload from './FileUpload';
import DateTime from './DateTime';
import CheckBoxList from './Choices'
import Choice from './Choice';

function Section({title,description,field_type_list,field_label,field_description}) {
    let temp = [];
    let comp;
    let len = field_type_list.length;
        for(let i = 0; i < len ; i++){
            if(field_type_list[i]["type"] === "text" || field_type_list[i]["type"] === "number")
                comp = <TextFields label={field_label[i]} description={field_description[i]} type={field_type_list[i]['field_type']} />
            else if(field_type_list[i]["type"] === "dropDown")
                comp = <Select  label={field_label[i]} description={field_description[i]} option_labels={field_type_list[i]["option"]} ismultiple={false}/>
            else if(field_type_list[i]["type"] === "fileUpload")
                comp = <FileUpload label={field_label[i]} description={field_description[i]} type="file"/>
            else if(field_type_list[i]["type"] === "datetime")
                comp = <DateTime label={field_label[i]} description={field_description[i]}/>
            else if(field_type_list[i]["type"] === "multipleChoices")
                comp = <CheckBoxList label={field_label[i]} description={field_description[i]} option_labels={field_type_list[i]["option"]} />    
            else if(field_type_list[i]["type"] === "choice")
                comp = <Choice label={field_label[i]} description={field_description[i]} options_label={field_type_list[i]["option"]}/>

            
            temp.push(comp);
        }
        
    return (
        <div className="sections">
            <h2>{title}</h2>
            <p>{description}</p>
            {/*Use this template and create form*/}
            {temp}
            {/*Code Above use the template named props for form creation*/}

        {/*This is Submit Button*/}    
        <Button variant="contained" color="secondary" size="large" value="submit" style={{marginTop:'10px', width:'40%', marginBottom:'10px'}}>Submit</Button>            
        </div>
    );
}

export default Section;
