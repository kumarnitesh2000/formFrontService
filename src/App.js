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
