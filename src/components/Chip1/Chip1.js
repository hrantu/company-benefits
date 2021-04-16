import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Checkbox1 from '../Checkbox1/Checkbox1';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import HomeIcon from '@material-ui/icons/Home';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import SettingsIcon from '@material-ui/icons/Settings';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
        
    }
    },
    // outlinedPrimary: {
        
    //     margin: '0px 10px',
    //     width: '300px',
    //     height: '40px',
    // },

}));



const Chip1 = () => {
    const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
    
    
  };

    return (
        
             <div className={classes.root}>
      
      <div>
          
      <Chip
        icon={<TrackChangesIcon />}
        label="Excellent Health Care"
        clickable
        color="primary"
        onDelete={handleDelete}
        onClick={{handleClick}}
        // deleteIcon={<DoneIcon />}
        deleteIcon={<Checkbox1></Checkbox1>}
        variant="outlined" 
      />
      
      <Chip
        icon={<HomeIcon />}
        label="Daily Snacks"
        clickable
        color="primary"
        onDelete={handleDelete}
        onClick={{handleClick}}
        // deleteIcon={<DoneIcon />}
        deleteIcon={<Checkbox1></Checkbox1>}
        variant="outlined"
      />
      
      <Chip
        icon={<AssessmentIcon />}
        label="Group Activities"
        clickable
        color="primary"
        onDelete={handleDelete}
        onClick={{handleClick}}
        // deleteIcon={<DoneIcon />}
        deleteIcon={<Checkbox1></Checkbox1>}
        variant="outlined"
      />
      </div>
      <div>
      
      <Chip
        icon={<SettingsIcon />}
        label="Volunteer Opportunities"
        clickable
        color="primary"
        onDelete={handleDelete}
        onClick={{handleClick}}
        // deleteIcon={<DoneIcon />}
        deleteIcon={<Checkbox1></Checkbox1>}
        variant="outlined"
      />

      <Chip
        icon={<EmojiObjectsIcon />}
        label="Wellness Programs"
        clickable
        color="primary"
        onDelete={handleDelete}
        onClick={{handleClick}}
        // deleteIcon={<DoneIcon />}
        deleteIcon={<Checkbox1></Checkbox1>}
        variant="outlined"
      />
      <Chip
        icon={<LocalFloristIcon />}
        label="Paid time off"
        clickable
        color="primary"
        onDelete={handleDelete}
        onClick={{handleClick}}
        deleteIcon={<Checkbox1></Checkbox1>}
        variant="outlined"
      />
      </div>
      
    </div>
        
    );
};

export default Chip1;