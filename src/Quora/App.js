
import Navbar from "./Layout/Navbar";

import { Grid, makeStyles } from "@material-ui/core";
import Leftbar from "./Bar/Leftbar";
import Rightbar from "./Bar/RightBar";
import Feed from "./Post/Feed";
import { Add } from "@material-ui/icons";
import Post from "./Post/Post";
import QuestionBar from "./Post/Questionbar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Quora = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
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
      <Add />
    </div>
  );
};

export default Quora;