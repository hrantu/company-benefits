import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import header from '../../images/header.jpg';
import Textbox1 from '../Textbox1/Textbox1';
import Textbox2 from '../Textbox2/Textbox2';
import Avatar1 from '../Avatar1/Avatar1';
import Button1 from '../Button1/Button1';
import Button2 from '../Button2/Button2';
import Chip1 from '../Chip1/Chip1';
import Modal1 from '../Modal1/Modal1';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Card1.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    maxHeight:1100,
    position: 'relative',
    left: '170px'
    
  },
  media: {
    height: 167,
  },
  
});
const Card1 = () => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
      
        <CardMedia
          className={classes.media}
          image={header}
          
        />
        <div>
        <Avatar1></Avatar1>
        </div> 
            <Button1></Button1>
            <Button2></Button2>
            <div className="a1">
        <CardContent>
          
          <Textbox2></Textbox2>
          
        <div>
          <Textbox1></Textbox1>
          </div>
          
          
          
        </CardContent>
      
        <div className="container">
            <div className="row">
                <div className="col-6">
                <h5 className="txt2">Benefits</h5>
                </div>
                <div className="col-6 mod1">
                <Modal1></Modal1>
                </div>
            </div>
        </div>
        
        <br></br>
        <div>
        <Chip1></Chip1>
        </div>
        <div className="btn3">
      
      <button className="button2">Skip</button> <button className="button">Save <ArrowForwardIosIcon></ArrowForwardIosIcon></button>
      </div>
      <br></br>
      </div>
    </Card>
        </div>
    );
};

export default Card1;