import React, { useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TextField from '@mui/material/TextField';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@mui/material/Avatar';
import { Home } from '@material-ui/icons';
import ListAltSharpIcon from '@material-ui/icons/ListAltSharp';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PeopleIcon from '@material-ui/icons/People';

import Dialog from '@material-ui/core/Dialog';
import LanguageIcon from '@material-ui/icons/Language';

import DialogContent from '@material-ui/core/DialogContent';
import LinkIcon from '@material-ui/icons/Link'; 
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { addQuestion } from '../../actions/question';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { DialogActions } from '@material-ui/core';
const defaultProps = {
  m: 1,
  border: 1,

};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
   
  marginLeft:theme.spacing(0,0),
    marginRight: theme.spacing(0,0),
    '& > *': {
      margin: theme.spacing(0),
    },
  
  },
  name: {
    display: 'inline',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  title: {
      display: 'Grid',
      width:'3.7rem',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      width:'10.7rem',
    },
  },
  search: {
    position: 'relative',
 color:'#d50000',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.15),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
   width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
     height: '100%',
    position: 'absolute',
     pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down("xs")]: {
      display: "none",
    }
  },
  icon:{
    padding: theme.spacing(0, 2),
    alignItems:'center',
    justifyContent: 'center',
    // paddingTop: theme.spacing(10),
    // position: "sticky",
    
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
 
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  questi:{
    height:'50vh',
    width:'50vh',
    [theme.breakpoints.up("sm")]: {
      height:'100vh',
      width:'100vh',
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
 
  notification: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display:'inline',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navbar() {
  const [Question, setQuestion] = useState('')
  const dispatch=useDispatch()
  const[inputUrl,setinputUrl]=useState('')
  const [value, setValue] = React.useState('Controlled');
  // const handleQuill=(value)=>{
  //   setQuestion(value)
  // }
  const handleSubmit=()=>{
    console.log(Question,inputUrl)
    dispatch(addQuestion(Question,inputUrl))
    handleClose()
  
  }
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    localStorage.clear();
    window.location.href="/login"
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <IconButton color="inherit">
       
            <LanguageIcon />
        
        </IconButton>
        <p>Language</p>
      </MenuItem>
      <MenuItem>
        <IconButton  color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="#d50000">
        <Toolbar>
       
          <Typography className={classes.title} variant="h6" noWrap>
          <img width={'90px'}
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
         alt=""    />
          </Typography>
    

          <div className={classes.icon} >
          <IconButton color="#4615b2"   className={classes.menuButton} component={Link} to="/home">
          <Home/>
          </IconButton>
          <IconButton color="#d50000"  className={classes.menuButton}>
          <ListAltSharpIcon/>
          </IconButton>
          <IconButton color="#d50000"  className={classes.menuButton} component={Link} to="/answer">
          <EditOutlinedIcon/>
          </IconButton>
          <IconButton color="#d50000"  className={classes.menuButton}>
          <PeopleIcon/>
          </IconButton >
          <IconButton color="#d50000" aria-label="show 17 new notifications"  className={classes.notification}>
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
        <div className={classes.sectionDesktop} borderRadius={16} {...defaultProps}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
              placeholder="Search Quora"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          </div>
           
          <Button borderRadius="100%" {...defaultProps} variant="contained"  className={classes.notification}>
        Try Quora+
      </Button>
    
          <div   className={classes.notification}>
      <IconButton
           
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </div>
        
<IconButton className={classes.notification}>
  <LanguageIcon/>
    </IconButton>
    <Button  borderRadius="100%" color="secondary" {...defaultProps} variant="contained"  className={classes.notification} onClick={handleClickOpen}>
        Add question
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Add Question"}</DialogTitle>
        <DialogContent className={classes.questi} >
        <Box
     sx={{
    width: 550,
    height: 150,
    backgroundColor: '#90caf9',
    color:'#0d47a1',
    
  }}>
  <Typography className=" px-3 py-1  pt-4 pb-2 mb-10 pl-56" variant="h6" >
              Tips on getting good answers quickly
          </Typography>
          <div className="flex items-center   px-4 py-1 ">
          <li>
              Make sure your question has not been asked already
              </li>
              <li>
              Keep your question short and to the point
              </li>
              <li>Double-check grammar and spelling</li>

          </div>
            
     
  </Box>
             
        <div className="mb-60">
                <input
                  required
                  value={Question}
                  onChange={(e) => setQuestion(e.target.value)}
                  type="text"
                  className="w-75 border-b border-gray-300 pt-4 pb-2 mb-4 outline-none "
                  placeholder='Start your question with "What", "How", "Why", etc. '
                />
              </div>
              <div>
              <LinkIcon />
                <input 
                  className="w-75 border-b border-gray-300 pt-4 pb-2 mb-4 outline-none border-none"
                value={inputUrl}
                onChange={(e)=>setinputUrl(e.target.value)}
                placeholder="Optional: include a link that gives context"
                type="text" />
            
              </div>
             
        </DialogContent>
      <DialogActions>
          <Button autoFocus onClick={handleClose} variant="contained" color="secondary" >
          Cancel
          </Button>
          <Button  borderRadius={16} {...defaultProps} onClick={handleSubmit} variant="contained" color="primary" autoFocus>
          Post
          </Button>
        </DialogActions>
     
      
      </Dialog>
      <IconButton aria-label="show 4 new mails" color="inherit" className={classes.notification}>
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
     
    </div>
  );
}




