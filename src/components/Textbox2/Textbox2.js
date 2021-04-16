import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '110ch',
    },
  },
}));
const Textbox2 = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <>
        
        <div>
             <form className={classes.root} noValidate autoComplete="off">
      <div>
        
        <TextField
          id="outlined-multiline-static"
          label="About Company*"
          multiline
          rows={6}
          placeholder="Type in Your Summary"
        //   defaultValue="Type in Your Summary"
          variant="outlined"
        />
      </div>
    </form>
        </div>        
        </>
    );
};

export default Textbox2;