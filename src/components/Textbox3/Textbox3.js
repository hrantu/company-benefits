import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '60ch',
    },
  },
}));

const Textbox3 = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
      <div>
        
        <TextField
          id="standard-textarea"
          label="Title*"
          placeholder="Group Activities"
          multiline
        />
        
      </div>
      <div>
      <TextField
          id="standard-multiline-static"
          label="Description*"
          multiline
          rows={4}
        //   defaultValue="Default Value"
        placeholder="Please Enter Here"
        />
        </div>
        
    </form>
    );
};

export default Textbox3;