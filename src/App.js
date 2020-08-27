import React from 'react';
import './App.css';
import TextField from './TextField';
import FielUpload from './FileUpload';
import Choice from './Choice';
import Select from './Select';
import DateTime from './DateTime';
const App = () =>{

return(
<div className="App">
   <h1>Form</h1>
   {/*Now this is example of an TextField for Name And Normal Text !*/}
   <TextField label="Name" description="Enter Your Name" type="text"/>
   {/*Now this is example of a number Field !*/}
   <TextField label="Roll Number" description="Enter Roll Number" type="number"/>
   {/*This is Example of File Upload Option */}
   <FielUpload label="Resume" description="Your CV File" type="file"/>
   {/*This is an Example of choose one from many */}
   <Choice label="Gender" description="Choose any One" options_label={["Male","Female"]}/>
   {/*This is An Example of choosing multiple options */}
   <Select label="Skills" description="Skill choose many" option_labels={["GCP","JavaScript","AWS","ML"]} ismultiple={true}/>
   {/*This is an Example of Dropdown*/}
   <Select label="workExperience" description="choose from dropdown" option_labels={["no","2yr","10yr","20yr"]} ismultiple={false}/>
   {/*This is Example of DateTime selection*/}
   <DateTime label="project start" description="enter date and time"/>
   <input type="submit" className="submitbut"/>

</div>

);

}

export default App;
