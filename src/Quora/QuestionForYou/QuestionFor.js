import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ExploreOffSharpIcon from '@material-ui/icons/ExploreOffSharp';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import { useDispatch } from 'react-redux';
import  { useState } from 'react';
import { addAnswers } from '../../actions/answers';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactQuill from 'react-quill';

import {  Divider, TextField } from '@material-ui/core';
import ReactHtmlParser from 'html-react-parser';
const useStyles = makeStyles((theme) =>({
  root: {
    marginTop:'20px',
    maxWidth: '100%'
  },
  media: {
    height: 140,
   
  },

}));

const QuestionCard=({data})=> {
  const { _id,question} = data

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);

  };
  
  const handleClose = () => {
    setOpen(false);
  };
  const [Answers,setAnswers] = useState('')
  const [content, setcontent] = useState('')
  const dispatch=useDispatch()
 const handleQuill=(value)=>{
  setAnswers(value)
 }
 const handleSubmit=()=>{

dispatch(addAnswers(_id,content,question,Answers))

}

 
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {question._id} 
          {ReactHtmlParser(question)}
          </Typography>
        </CardContent> 
      </CardActionArea>
      <div>
      <Button size="small" color="primary">
          <IconButton color="#d50000"  className={classes.menuButton}>
          <RssFeedIcon/> 
          </IconButton>
        
        </Button>
        <Button size="small" color="primary">
          <IconButton color="#d50000"  className={classes.menuButton}>
          <ExploreOffSharpIcon/> 
          </IconButton>
        Pass
        </Button>
        <Button size="small" color="primary">
          <IconButton color="#d50000"  className={classes.menuButton}>
          <ArrowUpwardSharpIcon /> 
          </IconButton>
        </Button>
        
        <Button size="small" color="primary">
          <IconButton color="#d50000"  className={classes.menuButton}>
          <ShareRoundedIcon/>
          </IconButton>
        </Button>
      </div>
      <CardActions>
       </CardActions>      
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Write Your Answers</Typography>
        </AccordionSummary>
        <form noValidate autoComplete="off">
  <TextField onChange={(e) => { setcontent(e.target.value) }} id="outlined-basic" label="Write the Content" variant="outlined" />
</form>
    
                <ReactQuill 
          theme="snow"
          value={Answers}
          onChange={handleQuill}
          />
      
      
      <Divider light />
      <Button color="primary" variant="contained" onClick={handleSubmit}>Post</Button>
     
      </Accordion>
         
    </Card>
  );
}

export default QuestionCard;