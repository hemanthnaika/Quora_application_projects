
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ReactHtmlParser from 'html-react-parser';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
const options = [
 

<BookmarkBorderIcon/>,
 < ArrowDownwardIcon/>,



 
];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:'50px',
    maxWidth: '100%'
  },
  media: {
    height: 550,
    [theme.breakpoints.down("sm")]: {
      height: 250,
       },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


const PostCard=({data})=> {
      const {question,Answers,date,_id,imageUrl,likes } = data
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
// Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 
  return (
    
    <Card className={classes.root}>
      
       <div >
       {new Date(date).toLocaleString()}
       </div>
  <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          {ReactHtmlParser(question)}
          </Typography>
         
        </CardContent> 
      <CardMedia
        className={classes.media}
        image={imageUrl}
        
      />
  
      <CardActions disableSpacing>
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label={likes}
      />
        <IconButton  aria-label="share">
          <ShareIcon />
        </IconButton>

<IconButton
  className={clsx(classes.expand, {
    [classes.expandOpen]: expanded,
  })}
        aria-label="more"
        
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      </CardActions>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Answers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {ReactHtmlParser(Answers)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Card>


  );
}
export default PostCard;

