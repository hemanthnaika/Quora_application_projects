
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
import { Divider } from "@chakra-ui/react";







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
    
    
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 15,
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
         <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/mental-health-matters-motivational-quote-on-the-letter-board-text-picture-id1307052182?b=1&k=20&m=1307052182&s=170667a&w=0&h=2QclCUuNAicP20FB0E6-EfxwW3LUadY9J6r8HZGCN8Q=" alt="" />
      </StyledBadge>
      <Typography className={classes.text}>Psychology</Typography>
      </div>
      <Divider light />
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
         <img  border-radius={'50%'} width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" alt="q" />
      </StyledBadge>
      
        <Typography className={classes.text}>Food</Typography>
      </div>
      <Divider light />
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      > 
           <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/vaccine-in-laboratory-flu-shot-and-covid19-vaccination-picture-id1289345741?b=1&k=20&m=1289345741&s=170667a&w=0&h=oG8iaDNP4rOLSgXWfeSziU3Vyu6KJS9Hn2ORohzSsRg=" alt="q" />
      </StyledBadge>
     
        <Typography className={classes.text}>Science</Typography>
      </div>
      <Divider light />
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
          
          <img width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/this-food-is-helathy-picture-id815208470?b=1&k=20&m=815208470&s=170667a&w=0&h=pQCFU_2Q5wKPIr-ECIGF4McKgZbh095jYNyXW6budik=" alt="q" />
      </StyledBadge>
        <Typography className={classes.text}>Health</Typography>
      </div>
      <Divider light />
      <div className={classes.item}>
     
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <img  width={'50px'} height={'50px'} src="https://images.unsplash.com/photo-1638042634525-316c0f32083b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzLnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="q" />
      </StyledBadge>
      <Typography className={classes.text}>Movies</Typography>
      </div>
      <Divider light />
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
         <img  width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/circuit-blue-board-background-copy-space-computer-data-technology-picture-id1340728386?b=1&k=20&m=1340728386&s=170667a&w=0&h=FQ7GuNOoq7JzCwb4YWJZ3iyMxky5hAaVnFf7VcQ-dA0=" alt="q" />
      </StyledBadge>
        <Typography className={classes.text}>Telnology</Typography>
      </div>
      <Divider/>
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
         <img  width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ=" alt="q" />
      </StyledBadge>
        <Typography className={classes.text}>Web Design</Typography>
      </div>
      <Divider/>
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <img  width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/nodejs-inscription-against-laptop-and-code-background-picture-id1347542592?b=1&k=20&m=1347542592&s=170667a&w=0&h=L7Vdq9Ae4cAlL-xZ_EqZog1wixnNUGOJHmEjhW868Xg=" alt="q" />
      </StyledBadge>
        <Typography className={classes.text}>Node.js</Typography>
      </div>
      <Divider/>
      <div className={classes.item}>
      <StyledBadge
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
      <img  width={'50px'} height={'50px'} src="https://media.istockphoto.com/photos/web-development-inscription-against-laptop-and-code-background-learn-picture-id1305026697?b=1&k=20&m=1305026697&s=170667a&w=0&h=TdaCFhtSgAS4iPWX3J2lW2wM3nT2__Hq3hMD7BzejPU=" alt="q" />
      </StyledBadge>
        <Typography className={classes.text}>Front-End Web Development</Typography>
      </div>
      <Divider/>
     
       
 <div>
        <li>About</li>
        <li>Careers</li>
        <li>Terms</li>
   <li>Privacy</li>
          <li>Acceptable Use</li>
     <li> Businesses</li>
     <li>Press</li>
     <li>Your</li>
     <li>Ad Choices</li>
     </div> 
 
 
    </Container>
  );
};

export default Leftbar;