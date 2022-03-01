
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
      <img width={'50px'} height={'50px'} src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMCUyNiUyMG1lZGl0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <Typography className={classes.text}>  
       
        Yoga & Meditation
        
        </Typography>
      </div>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
        
        <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/online-education-concept-picture-id636332456?b=1&k=20&m=636332456&s=170667a&w=0&h=SyCtNMVCxM2h0L7NuxW4grWplRj-_ZoteN7XiEnVyhs=" alt="" />
        <Typography className={classes.text}>
       Mathematics and Physics
        </Typography>
      
      </div>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
            
      <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/trading-business-the-affiliate-offers-a-profit-model-to-adapt-the-picture-id948339996?b=1&k=20&m=948339996&s=170667a&w=0&h=DLo5TsMphxmlKJF5zK-pr7UPVRJPIK30MXlETKbqRkU=" alt="" />
        <Typography className={classes.text}>  
   Affiliate & CPA Marketing
        </Typography>
        
      </div>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
                
      <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/shooting-young-asian-men-and-women-drinking-coffee-picture-id1181866579?b=1&k=20&m=1181866579&s=170667a&w=0&h=_dXvRXeOPVNWTGOdJz8xWTp0czkxYUh5bCpeeCaLjp8=" alt="" />
        <Typography className={classes.text}>  
     
 BTS Lover's
        </Typography>
      </div>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
                
      <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/filing-in-file-cabinet-picture-id618963716?b=1&k=20&m=618963716&s=170667a&w=0&h=DEsyMypk5YyCtXKOXE3XIbwjkbVJXY8ykco3ip-Y6mA=" alt="" />
        <Typography className={classes.text}>  
       
       Dhandha Fonders
        </Typography>
      </div>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
                
      <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/social-network-picture-id1142791580?b=1&k=20&m=1142791580&s=170667a&w=0&h=l8xNp1D0D09RkJuG4OcIfYUaQC4ikPKxvXl62kh7w2E=" alt="" />
        <Typography className={classes.text}>  
       
Blogging Help
        </Typography>
      </div>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
                
      <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/search-engine-optimization-concept-picture-id1168178663?b=1&k=20&m=1168178663&s=170667a&w=0&h=eTdN_sHQusWPbEEWvOE20j6fAg5GI1J-JGStblxJwRE=" alt="" />
        <Typography className={classes.text}>  
      
SEO Tips & Trends

        </Typography>

      </div>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Card>
      <Divider light />
      <Card>
      <div className={classes.follow}>
                
      <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/cheerful-woman-and-her-business-plan-picture-id1282110628?b=1&k=20&m=1282110628&s=170667a&w=0&h=NDDPlHUlIblxtIa6J0NIv81PGbG-G6GMPTirGuKEV7I=" alt="" />
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