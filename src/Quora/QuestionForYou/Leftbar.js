
import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({

  container: {
     height: "100vh",
    
    
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  item: {
     display: "flex",
    
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
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
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Typography gutterBottom variant="h6" color="error" component="h2">Questions</Typography>
      </div>
      <div className={classes.item}>
        <Typography className={classes.text}>Question for you</Typography>
      </div>
      <div className={classes.item}>
        <Typography className={classes.text}>Answer requests
</Typography>
      </div>
      <div className={classes.item}>
        <Typography className={classes.text}>Answer drafts</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;