import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Chip2 from '../Chip2/Chip2';
import "./Modal.css"
import Alert1 from '../Alert1/Alert1';
import Textbox3 from '../Textbox3/Textbox3';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Modal1 = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Add Benefits</Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Benefits
        </DialogTitle>
        <DialogContent dividers>
            <div>
          <p>Choose benefit to add</p>
          <Chip2></Chip2>
          </div>
          <div>
              <h5 className="txt">Benefits</h5>
              <Alert1></Alert1>
              <Textbox3></Textbox3>
              <button className="button2">Save</button>
              
          </div>
        </DialogContent>
        <DialogActions>
          <Button className="button2" autoFocus onClick={handleClose}>
            Back
          </Button>
          <Button className="button" autoFocus onClick={handleClose} >
            Save
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    );
};

export default Modal1;