import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
function FileUpload({label,description,type}) {
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        input: {
          display: 'none',
        },
      }));
      const classes = useStyles();
    return (
        
<div className={classes.root}>
<div className={classes.root}>{label}</div>
<div className={classes.root}>{description}</div>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type={type}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="secondary" component="span">
          Upload
        </Button>
      </label>
     
    </div>
    );
}

export default FileUpload;