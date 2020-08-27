import React from 'react';
import './DateTime.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
function DateTime({label,description}) {
    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
      }));
        const classes = useStyles();
    return (
        <div className="datetimeblock">
            <div className="datetimeblock__help">
    <label>{label}</label>
    <p>{description}</p>
            </div>

            <div className="datetimeblock__input">
                {/*Anmol Have To Code Here Only*/}
                <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
     <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
            </div>
        </div>
    );
}

export default DateTime;