import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Question from '../Write/Question';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import Answers from './Answers';
const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: 'auto',
  },
  media: {
    height: 140,
   
  },

}));

const QuestionCard=({data})=> {
  const { id,question,follow } = data
  console.log({id})

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          {`${question}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
 
        >
             <Button size="small" color="primary">
          <IconButton color="#d50000"  className={classes.menuButton} onClick={handleClickOpen}>
          <EditOutlinedIcon/>
          </IconButton>
        </Button>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
    <Answers/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </CardActions>
      <Button size="small" color="primary">
          <IconButton color="#d50000"  className={classes.menuButton}>
          <RssFeedIcon/> 
          </IconButton>
          Follow {follow}
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
        
    </Card>
  );
}

export default QuestionCard;