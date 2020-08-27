import React from 'react';
import TextFields from './TextFields';
import FielUpload from './FileUpload';
import Choice from './Choice';
import Select from './Select';
import DateTime from './DateTime';
import CheckBoxList from './Choices'
import Button from '@material-ui/core/Button';
import Header from './Header';

function Form() {
    return (
        <div className="form">
        {/*This is Header Section*/}
        <Header title="Contact info" description="this is contact info enter correct info ."/>   
        {/*Now this is example of an TextField for Name And Normal Text !*/}
        <TextFields label="Name" description="Enter Your Name" type="text"/>
        {/*Now this is example of a number Field !*/}
        <TextFields label="Roll Number" description="Enter Roll Number" type="number"/>
        {/*This is Example of File Upload Option */}
        <FielUpload label="Resume" description="Your CV File" type="file"/>
        {/*This is An Example of choosing multiple options */}
        <CheckBoxList label="Skills" description="Skill choose many" option_labels={["GCP","JavaScript","AWS","ML"]}/>
        {/*This is an Example of choose one from many */}
        <Choice label="Gender" description="Choose any One" options_label={["Male","Female"]}/>
        {/*This is an Example of Dropdown*/}
        <Select label="workExperience" description="choose from dropdown" option_labels={["no","2yr","10yr","20yr"]} ismultiple={false}/>
        {/*This is Example of DateTime selection*/}
        <DateTime label="project start" description="enter date and time"/>
        {/*Button for Form Submission*/}
        <Button variant="contained" color="secondary" size="large" value="submit" style={{marginTop:'10px', width:'40%', marginBottom:'10px'}}>Submit</Button>
        </div>
    );
}

export default Form;