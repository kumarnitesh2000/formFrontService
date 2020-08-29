import React,{useState} from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import DynamicForm from './DynamicForm';
import template from './template';


const App = () =>{

const are_you_testing = false;

//import the json template here -> this template shows the form you have to show    
//hello contributor the demo template is available at -------------------->  https://jsonformatter.org/d96a0c
//in the left part side on this url take that json and given to below template variable 
//use that obj to create form template in DynamicForm component  .
// TODO

const url =  "http://localhost:8000/forms/form_info/13";
const [template_final,setTemplate] = useState(template);
//put that fetched template in this template variable  .
fetch(url).then((res) => res.json()).then(data => {
  console.log(data);
  setTemplate(data.template);
})

return(
<div className="App">
   {/*This is Header Section*/}
   <Header title="Contact info" description="this is contact info enter correct info ."/>
   {/*This is only the test Form to Show each and every field and component */}

{

are_you_testing ? (<Form />) :  (<DynamicForm template={template_final}/>)

}
  
</div>

);

}

export default App;
