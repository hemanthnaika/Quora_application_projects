
import { Container, IconButton, makeStyles, Typography } from "@material-ui/core";
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
import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import {withStyles } from '@material-ui/core/styles';







const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#d50000',
    color: '#d50000',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))(Badge);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  container: {
     height: "100vh",
    
    
    paddingTop: theme.spacing(7),
    position: "sticky",
    top: 25,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  item: {
     display: "flex",
    
    alignItems: "center",
    marginBottom: theme.spacing(0),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(0),
      cursor: "pointer",
     
    },
   
  },
  src: {
width:'20px',
  },
  icon: {

    marginRight: theme.spacing(0),
    [theme.breakpoints.up("sm")]: {
      fontSize: "4px",
    
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
      <div className={classes.item} >
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
          
        }}
        variant="dot"
      >
         <IconButton><img src="gg" alt="q" /></IconButton>
         
      </StyledBadge>
      <Typography className={classes.text}>Psychology</Typography>
      </div>
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
          <IconButton><img src="gg" alt="q" /></IconButton>
      </StyledBadge>
        <Typography className={classes.text}>Food</Typography>
      </div>
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
           <IconButton><img src="gg" alt="q" /></IconButton>
      </StyledBadge>
        <Typography className={classes.text}>Science</Typography>
      </div>
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
          <IconButton>PP</IconButton>
      </StyledBadge>
        <Typography className={classes.text}>Health</Typography>
      </div>
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <IconButton><img src="gg" alt="q" /></IconButton>
      </StyledBadge>
        <Typography className={classes.text}>Movies</Typography>
      </div>
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
          <IconButton><img src="gg" alt="q" /></IconButton>
      </StyledBadge>
        <Typography className={classes.text}>Telnology</Typography>
      </div>
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
         <IconButton><img src="gg" alt="q" /></IconButton>
      </StyledBadge>
        <Typography className={classes.text}>Web Design</Typography>
      </div>
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
          <IconButton><img src="gg" alt="q" /></IconButton>
      </StyledBadge>
        <Typography className={classes.text}>Node.js</Typography>
      </div>
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
       <IconButton><img src="gg" alt="q" /></IconButton>
      </StyledBadge>
        <Typography className={classes.text}>Front-End Web Development</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;