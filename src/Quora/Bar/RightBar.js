
import { Divider } from "@chakra-ui/react";
import { Avatar, Card, Checkbox, Container, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { display } from "@mui/system";


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
    marginTop:theme.spacing(3),
    fontWeight:900,
  display:'flex',
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
      <Divider light />
      <div className={classes.item}>
      
        <Typography className={classes.text}><Checkbox/>Follow 5 more Spaces
        </Typography>
      </div>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.item}>
        <Typography className={classes.text}><Checkbox/>Upvote 5 more good pieces of content
        </Typography>
      </div>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.item}>
        <Typography className={classes.text}><Checkbox/>Ask a question
        </Typography>
      </div>
      </Card>
      <Divider light/>
      <Card>
      <div className={classes.item}>
        <Typography className={classes.text}><Checkbox/>Add 3 credentials about where you live
        </Typography>
      </div>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.item}>
        <Typography className={classes.text}><Checkbox/>Answer a question
        </Typography>
      </div>
      </Card>
      <Divider light />
      </div>
<div className={classes.spaces}>
<Card>
<Divider light />
      <div className={classes.follow}>
        <Typography gutterBottom variant="h6"  component="h6" className={classes.text}>Spaces to follow
        </Typography>
      </div>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
      <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/mental-health-matters-motivational-quote-on-the-letter-board-text-picture-id1307052182?b=1&k=20&m=1307052182&s=170667a&w=0&h=2QclCUuNAicP20FB0E6-EfxwW3LUadY9J6r8HZGCN8Q=" alt="" />
        <Typography className={classes.text}>  
       
        Yoga & Meditation
        
        </Typography>
      </div>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
        
        <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/mental-health-matters-motivational-quote-on-the-letter-board-text-picture-id1307052182?b=1&k=20&m=1307052182&s=170667a&w=0&h=2QclCUuNAicP20FB0E6-EfxwW3LUadY9J6r8HZGCN8Q=" alt="" />
        <Typography className={classes.text}>
       Mathematics and Physics
        </Typography>
      
      </div>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
            
      <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/mental-health-matters-motivational-quote-on-the-letter-board-text-picture-id1307052182?b=1&k=20&m=1307052182&s=170667a&w=0&h=2QclCUuNAicP20FB0E6-EfxwW3LUadY9J6r8HZGCN8Q=" alt="" />
        <Typography className={classes.text}>  
   Affiliate & CPA Marketing
        </Typography>
        
      </div>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
                
      <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/mental-health-matters-motivational-quote-on-the-letter-board-text-picture-id1307052182?b=1&k=20&m=1307052182&s=170667a&w=0&h=2QclCUuNAicP20FB0E6-EfxwW3LUadY9J6r8HZGCN8Q=" alt="" />
        <Typography className={classes.text}>  
     
 BTS Lover's
        </Typography>
      </div>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
                
      <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/mental-health-matters-motivational-quote-on-the-letter-board-text-picture-id1307052182?b=1&k=20&m=1307052182&s=170667a&w=0&h=2QclCUuNAicP20FB0E6-EfxwW3LUadY9J6r8HZGCN8Q=" alt="" />
        <Typography className={classes.text}>  
       
       Dhandha Fonders
        </Typography>
      </div>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
                
      <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/mental-health-matters-motivational-quote-on-the-letter-board-text-picture-id1307052182?b=1&k=20&m=1307052182&s=170667a&w=0&h=2QclCUuNAicP20FB0E6-EfxwW3LUadY9J6r8HZGCN8Q=" alt="" />
        <Typography className={classes.text}>  
       
Blogging Help
        </Typography>
      </div>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
                
      <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/mental-health-matters-motivational-quote-on-the-letter-board-text-picture-id1307052182?b=1&k=20&m=1307052182&s=170667a&w=0&h=2QclCUuNAicP20FB0E6-EfxwW3LUadY9J6r8HZGCN8Q=" alt="" />
        <Typography className={classes.text}>  
      
SEO Tips & Trends

        </Typography>

      </div>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
                
      <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/mental-health-matters-motivational-quote-on-the-letter-board-text-picture-id1307052182?b=1&k=20&m=1307052182&s=170667a&w=0&h=2QclCUuNAicP20FB0E6-EfxwW3LUadY9J6r8HZGCN8Q=" alt="" />
        <Typography className={classes.text}>  
       
The Entrepreneur 
        </Typography>

      </div>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Card>
</div>
<Divider light />
    </Container>
  );
};

export default Rightbar;