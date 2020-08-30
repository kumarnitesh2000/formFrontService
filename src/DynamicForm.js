import React from 'react';
import Section from './Section';



function DynamicForm({template}) {


    let temp = [];
    let comp; 
    let start = 0;
    
    const sections_title = template.section['section_title'];
    const section_description = template.section['section_description'];
    const section_fields = template.section['section_fields'];
     

    for(let i=0;i<sections_title.length;i++){
        let field_label = [];
        let field_description = [] ;
        let field_type_list = [] ;
        console.log(`${start} to ${section_fields[i]+start}`);
        for(let j=start;j<section_fields[i]+start;j++){
                ;
                field_label.push(template.field['field_label'][j]);
                field_description.push(template.field['field_description'][j]);
                
                field_type_list.push({"type":template.field['field_type_list'][j]['field_type'], "option":template.field['field_type_list'][j]['options']});
        }
        
        comp = <Section title={sections_title[i]} description={section_description[i]} field_type_list={field_type_list} field_label={field_label} field_description={field_description}/>
        temp.push(comp)
        start+=section_fields[i];
       
    }

    return (
        <div>
       
                {temp}
        </div>
    );
}

export default DynamicForm;