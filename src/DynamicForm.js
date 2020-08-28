import React from 'react';
import Button from '@material-ui/core/Button';
import TextFields from './TextFields';
import Select from './Select';
import FileUpload from './FileUpload';
import DateTime from './DateTime';

function DynamicForm({template}) {
    let temp = [];
    let comp;
    const c = template.field;
    var len = template.field['field_label'].length;
        for(var i = 0; i < len ; i++){
            if(c['field_type_list'][i]['field_type'] === "text" || c['field_type_list'][i]['field_type'] === "number")
                comp = <TextFields label={c['field_label'][i]} description={c['field_description'][i]} type={c['field_type_list'][i]['field_type']} />
            else if(c['field_type_list'][i]['field_type'] === "dropDown")
                comp = <Select  label={c['field_label'][i]} description={c['field_description'][i]} option_labels={c['field_type_list'][i]['options']} ismultiple={false}/>
            else if(c['field_type_list'][i]['field_type'] === "fileUpload")
                comp = <FileUpload label={c['field_label'][i]} description={c['field_description'][i]} type="file"/>
            else if(c['field_type_list'][i]['field_type'] === "datetime")
                comp = <DateTime label={c['field_label'][i]} description={c['field_description'][i]}/>
                    
            
            temp.push(comp);
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
