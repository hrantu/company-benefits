import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  btn2: {
    top: '-590px',
    left: '135px',
    // width: '140px',
    // height: '140px',
    position: 'relative',
    color: 'Gray'
}
}));

const Button2 = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
      
      <Fab className={classes.btn2} size="small"  aria-label="edit">
        <EditIcon />
      </Fab>
      
    </div>
        </div>
    );
};

export default Button2;