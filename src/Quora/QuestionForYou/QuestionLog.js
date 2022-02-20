import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    marginTop:'90px',
    maxWidth: 'auto',
  },
  media: {
    height: 100,
   
  },
});

export default function QuestionLogo() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
         <IconButton color='buttonerror'><LocalActivityIcon/></IconButton>Questions for you
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
