import React from 'react';
import TextField from './TextField';

function FileUpload({label,description,type}) {
    return (
        <TextField label={label} description={description} type={type}></TextField>
    );
}

export default FileUpload;