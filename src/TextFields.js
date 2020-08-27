import React from 'react';
import './TextField.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
function TextFields({label, description,type}) {
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
      const classes = useStyles();
    return (
        <div className="textblock">
            <div className="textblock__input">
                <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label={label} placeholder={description} type={type}/>
    </form>
            </div>
        </div>
    );
}

export default TextFields;