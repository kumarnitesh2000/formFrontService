import React from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import DynamicForm from './DynamicForm';
const App = () =>{

const are_you_testing = false;
//import the json template here -> this template shows the form you have to show    
//hello contributor the demo template is available at -------------------->  https://jsonformatter.org/904dde
//in the left part side on this url take that json and given to below template variable 
//use that obj to create form template in DynamicForm component  .
// TODO
const template = {
  "form": {
    "form_title": "Contact Form",
    "form_description": "Please Enter Your Contact Details Very Carefully . if wrong contact then no selection"
  },
  "section": {
    "section_title": [
      "Contact Section",
      "Personal Info Section",
      "Resume Section"
    ],
    "section_description": [
      "In this Section Phone number and Mail Are there Please Fill these correctly",
      "In This Section Your Name  , Father Name , Mothers Name are there , Gender",
      "In this Section your CV , graduation Year |Month , Your Skills"
    ]
  },
  "field": {
    "field_description": [
      "phone",
      "email",
      "Enter Name",
      "Fathers Name",
      "Gender",
      "CV",
      "Graduation Year | Month"
    ],
    "field_label": [
      "phone",
      "email",
      "Name",
      "Fathers Name",
      "Gender",
      "CV",
      "Graduation Year | Month"
    ],
    "field_type_list": [
      {
        "field_type": "number",
        "index": 0,
        "options": []
      },
      {
        "field_type": "text",
        "index": 1,
        "options": []
      },
      {
        "field_type": "text",
        "index": 2,
        "options": []
      },
      {
        "field_type": "text",
        "index": 3,
        "options": []
      },
      {
        "field_type": "dropDown",
        "index": 4,
        "options": [
          "Male",
          "female",
          "others"
        ]
      },
      {
        "field_type": "fileUpload",
        "index": 5,
        "options": []
      },
      {
        "field_type": "datetime",
        "index": 6,
        "options": []
      }
    ]
  }
};
return(
<div className="App">
   {/*This is Header Section*/}
   <Header title="Contact info" description="this is contact info enter correct info ."/>
   {/*This is only the test Form to Show each and every field and component */}

{

are_you_testing ? (<Form />) :  (<DynamicForm template={template}/>)

}
  
</div>

);

}

export default App;
