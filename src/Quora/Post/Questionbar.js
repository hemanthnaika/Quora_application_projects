import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button, Input } from '@material-ui/core';
import { addQuestion } from '../../actions/question';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { DialogActions, Grid } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const defaultProps = {
 
  m: 1,
  border: 1,

};
const useStyles = makeStyles((theme)=>({
  root: {
    marginTop:'100px',
    maxWidth: '100%'
  },
  media: {
    height: 10,
    width:100,
  },
  questi:{
    height:'50vh',
    width:'50vh',
    [theme.breakpoints.up("sm")]: {
      height:'100vh',
      width:'100vh',
    },
  },
  questi:{
    height:'50vh',
    width:'50vh',
    [theme.breakpoints.up("sm")]: {
      height:'100vh',
      width:'100vh',
    },
  },
  question:{
    height:'10px',
  },
  
}));
export default function QuestionBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);

  };
  const {

    setValue,
    watch,
  } = useForm();


  // const onEditorStateChange = (editorState) => {
  //   setValue("Question", editorState);
  // };
  const [Question, setQuestion] = useState('')
  const[inputUrl,setinputUrl]=useState('')
 const dispatch=useDispatch()

const handleSubmit=()=>{
  console.log(Question,inputUrl)
  dispatch(addQuestion(Question,inputUrl))

  handleClose()

}
  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <Card className={classes.root}>
          <CardHeader className={classes.question}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
      />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6" onClick={handleClickOpen}>
          What do you want to ask or share?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Add Question"}</DialogTitle>
        <DialogContent className={classes.questi} >
        <Box
     sx={{
    width: 550,
    height: 150,
    backgroundColor: '#90caf9',
    color:'#0d47a1',
    
  }}>
  <Typography className=" px-3 py-1  pt-4 pb-2 mb-10 pl-56" variant="h6" >
              Tips on getting good answers quickly
          </Typography>
          <div className="flex items-center   px-4 py-1 ">
          <li>
              Make sure your question has not been asked already
              </li>
              <li>
              Keep your question short and to the point
              </li>
              <li>Double-check grammar and spelling</li>

          </div>
            
     
  </Box>   
        <div className="mb-60">
                <input
                  required
                  value={Question}
                  onChange={(e) => setQuestion(e.target.value)}
                  type="text"
                  className="w-75 border-b border-gray-300 pt-4 pb-2 mb-4 outline-none "
                  placeholder='Start your question with "What", "How", "Why", etc. '
                />
              </div>
              <div>
<LinkIcon />
                <input 
                  className="w-75 border-b pt-4 pb-2 mb-4 "
                value={inputUrl}
                onChange={(e)=>setinputUrl(e.target.value)}
                placeholder="Optional: include a link that gives context"
                type="text" />
            
              </div>
             
        </DialogContent>
      <DialogActions>
          <Button autoFocus onClick={handleClose} variant="contained" color="secondary" >
          Cancel
          </Button>
          <Button  borderRadius={16} {...defaultProps} onClick={handleSubmit} variant="contained" color="primary" autoFocus>
          Post
          </Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
  );
}
