import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({

root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  }
}));

const Textbox1 = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
            <div className="container">
        <div className="row">
        <div className="col-6">
            <div>
        <TextField
          id="outlined-textarea"
          label="Website"
          placeholder="Website(URL)"
          multiline
          variant="outlined"
        />
        </div>
        <br></br>
        <div> 
        <TextField
          id="outlined-textarea"
          label="Company Size*"
          placeholder="Employees"
          multiline
          variant="outlined"
        />
        </div>
        <br></br>
        <div> 
        <TextField
          id="outlined-textarea"
          label="Type"
          placeholder="Enter text"
          multiline
          variant="outlined"
        />
        </div>
        
      </div>
      <div className="col-6">
      <div>
        <TextField
          id="outlined-textarea"
          label="Industry*" 
          placeholder="Select Industry"
          multiline
          variant="outlined"
          
        />
        </div>
        <br></br>
        <div> 
        <TextField
          id="outlined-textarea"
          label="Headquarters"
          placeholder="Enter text"
          multiline
          variant="outlined"
        />
        </div>
        <br></br>
        <div> 
        <TextField
          id="outlined-textarea"
          label="Founded"
          placeholder="Enter Year"
          multiline
          variant="outlined"
        />
        </div>
        
      </div>

    </div> 
    </div>
    
    </div>
    <br></br>
    <div>
    <TextField
          id="outlined-full-width"
          label="Specialties"
          style={{ margin: 8 }}
          placeholder="Enter text"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
    </div>
    </div>
        
    );
};

export default Textbox1;