import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import dp from '../../images/dp.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(25),
      },
      
    },
    avatar: {
        top: '-272px',
        left: '-160px',
        width: '140px',
        height: '140px',
        position: 'relative',
        display: 'block'
    }

    
  }));

const Avatar1 = () => {
    const classes = useStyles();
    return (
        
            <div className={classes.root}>
                <Avatar className={classes.avatar} alt="R" src={dp} />    
            </div>
        
    );
};

export default Avatar1;