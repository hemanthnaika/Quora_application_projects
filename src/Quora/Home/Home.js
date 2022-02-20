import { Grid, makeStyles } from "@material-ui/core";
import Leftbar from "../Bar/Leftbar";
import Rightbar from "../Bar/RightBar";
import { Add } from "@material-ui/icons";
import Post from "../Post/Post";
import QuestionBar from "../Post/Questionbar";


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>  
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={150}>
        <QuestionBar/>
         <Post/>
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
    
    </div>
  );
};

export default Home;