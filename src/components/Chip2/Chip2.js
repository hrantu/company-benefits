import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { AddCircle, AddOutlined, PlusOneOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));



const Chip2 = () => {
    const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
const[variant,setVariant] = useState('outlined')
  const handleClick = () => {
    // console.info('You clicked the Chip.');
    setVariant('default')
    
  };

    return (
        <div>
             <div className={classes.root}>
      
      
      <Chip
        label="Excllent Health Care"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip 
        label="Daily Snacks"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        label="Group Activities"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Volunteer Opportunities"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Stock Options"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Wellness Programs"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Paid Time Off"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Life Insurance"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Unlimited PTO"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Tution Reimbursement"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Family and Medical Leave(FMLA)"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Disability Insurance"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Commuter Benefits"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Retirement Savings"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Overtime Pay"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Student Loan Repayment"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Relocation and Housing"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Remote Working"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Telecommuting"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Work from Home"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      <Chip
        
        label="Other"
        clickable
        color="primary"
        size="small"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<AddOutlined></AddOutlined>}
        variant="outlined"
      />
      
    </div>
        </div>
    );
};

export default Chip2;