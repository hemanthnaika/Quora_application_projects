
import { Avatar, Card, Checkbox, Container, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({

  container: {
     height: "100vh",
    paddingTop: theme.spacing(10),

    top: 1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  item: {
     display: "flex",
    top:theme.spacing(3),
   
    alignItems: "center",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(1),
      cursor: "pointer",
     
    },
   
  },
  
  icon: {

    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    
    },
  },
  text: {
    fontWeight: 500,
    paddingRight:5,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  follow:{
    marginTop:theme.spacing(1),
    fontWeight:900,
  
  },
  p:{
marginLeft:20,
  },
  spaces:{
marginTop:theme.spacing(6),
  },
  set:{
    marginTop:theme.spacing(4)
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Card >
      <div className={classes.item}>
        <Typography gutterBottom variant="h6" color="error" component="h2">Set Up Your Account</Typography>

      </div>
      </Card>
      <div className={classes.set}>
      <Card>
      <div className={classes.item}>
        <Typography className={classes.text}><Checkbox/>Follow 5 more Spaces
        </Typography>
      </div>
      </Card>
      <Card>
      <div className={classes.item}>
        <Typography className={classes.text}><Checkbox/>Upvote 5 more good pieces of content
        </Typography>
      </div>
      </Card>
      <Card>
      <div className={classes.item}>
        <Typography className={classes.text}><Checkbox/>Ask a question
        </Typography>
      </div>
      </Card>
      <Card>
      <div className={classes.item}>
        <Typography className={classes.text}><Checkbox/>Add 3 credentials about where you live
        </Typography>
      </div>
      </Card>
      <Card>
      <div className={classes.item}>
        <Typography className={classes.text}><Checkbox/>Answer a question
        </Typography>
      </div>
      </Card>
      </div>
<div className={classes.spaces}>
<Card>
      <div className={classes.follow}>
        <Typography gutterBottom variant="h6"  component="h2" className={classes.text}>Spaces to follow
        </Typography>
      </div>
      </Card>
      <Card>
      <div className={classes.follow}>
        <Typography className={classes.text}>  
        <IconButton><Home/> </IconButton>
        Yoga & Meditation
        </Typography>
      </div>
      </Card>
      <Card>
      <div className={classes.follow}>
        <Typography className={classes.text}>  
        <IconButton><Home/> </IconButton>
       Mathematics and Physics
        </Typography>
      </div>
      </Card>
      <Card>
      <div className={classes.follow}>
        <Typography className={classes.text}>  
        <IconButton><Home/> </IconButton>
   Affiliate & CPA Marketing
        </Typography>
      </div>
      </Card>
      <Card>
      <div className={classes.follow}>
        <Typography className={classes.text}>  
        <IconButton><Home/> </IconButton>
 BTS Lover's
        </Typography>
      </div>
      </Card>
      <Card>
      <div className={classes.follow}>
        <Typography className={classes.text}>  
        <IconButton><Home/> </IconButton>
Dhandha Fonders
        </Typography>
      </div>
      </Card>
      <Card>
      <div className={classes.follow}>
        <Typography className={classes.text}>  
        <IconButton><Home/> </IconButton>
Blogging Help
        </Typography>
      </div>
      </Card>
      <Card>
      <div className={classes.follow}>
        <Typography className={classes.text}>  
        <IconButton><img src="hhh" alt="A" /> </IconButton>
SEO Tips & Trends

        </Typography>

      </div>
      </Card>
      <Card>
      <div className={classes.follow}>
        <Typography className={classes.text}>  
        <IconButton><Home/> </IconButton>
The Entrepreneur 
        </Typography>

      </div>
      </Card>
</div>
     
    </Container>
  );
};

export default Rightbar;