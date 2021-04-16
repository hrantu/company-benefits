import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { Delete, Edit } from '@material-ui/icons';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert1 = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <Alert severity="info">Excllent Health Care <Edit></Edit><Delete></Delete><DragIndicatorIcon></DragIndicatorIcon>  <br></br> <small>We offer a comprehensive Benefits Package that includes Medical, dental & vision coverage</small>  </Alert>
      <Alert severity="info">Daily Snacks <Edit></Edit><Delete></Delete><DragIndicatorIcon></DragIndicatorIcon> <br></br> <small>Enjoy various services and snacks in break room</small></Alert>

    </div>
    );
};

export default Alert1;