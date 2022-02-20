import Leftbar from "./Leftbar";
import QuestionCard from "./QuestionFor";
import Rightbar from "./RightBar";
import { Grid, makeStyles } from "@material-ui/core";
import QuestionLogo from './QuestionLog'
const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const QuestionForYou = () => {
  const classes = useStyles();
  return (
    <Grid container>
    <Grid item sm={2} xs={2}>
      <Leftbar />
    </Grid>
    <Grid item sm={7} xs={150}>
    <QuestionLogo/>
     <QuestionCard/>
    </Grid>
    <Grid item sm={3} className={classes.right}>
      <Rightbar />
    </Grid>
  </Grid>
  
    );
}
export default QuestionForYou;