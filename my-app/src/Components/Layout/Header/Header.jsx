import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Box } from "@material-ui/core";




import ForumIcon from '@material-ui/icons/Forum';
import { Link, NavLink } from 'react-router-dom';
import { Container } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxHeight:'45px'
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  toolbar: {
    minHeight: '45px',
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  logo:{
    height:'20px'
  },
  navigation:{
      width:'350px',
      display:'flex',
      justifyContent:'space-between',
      marginLeft:'30px'
  },
  header_container:{
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between'
  },
  header_left:{
    display:'flex',
  },
  header_right:{
    display:'flex',
    '& div':{
        marginRight:'20px',
       
        justifyContent:'center'
    }
  },
  link:{
        marginLeft:'14px',
        '& a':{
            marginLeft:'20px'
        }
  }
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        
        <Toolbar className={classes.toolbar} >
            <Container className={classes.header_container} disableGutters maxWidth={false}>
                <Box className={classes.header_left}>
                    <img className={classes.logo} src="/Images/logo.svg" alt=""/>
                    <Box className={classes.link} display={{ xs: 'none', sm: 'block', md: 'block' }}>
                        <Typography component={NavLink} variant='h6' to='/' >
                            Find Jobs
                        </Typography>
                        <Typography component={NavLink} variant='h6' to='/companies' >
                            Company Reviews
                        </Typography>
                        <Typography component={NavLink} variant='h6' to='/salary' >
                            Find Salary
                        </Typography>
                    </Box>
                </Box>
                <Box className={classes.header_right} >
                    <Box>
                        <IconButton
                        edge="start"
                        
                        color="inherit"
                        aria-label="open drawer"
                        >
                        <ForumIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        >
                            <NotificationsIcon />
                        </IconButton>
                    </Box>
                        <Box  display={{ xs: 'none', sm: 'block', md: 'block' }}>
                            <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            >
                                <PersonIcon />
                            </IconButton>
                        </Box>
                        <Box display={{ xs: 'block', sm: 'none', md: 'none' }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerOpen}
                                className={clsx(open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    
                </Box>
            </Container>
         
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
       
      </Drawer>
    </div>
  );
}
