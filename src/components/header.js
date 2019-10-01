import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import Collapse from "@material-ui/core/Collapse"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme } from "@material-ui/core/styles"
import HideOnScrollToDown from "./hideOnScrollToDown"
import Icse2015 from "../images/icse2015.jpg"
import Icse2017 from "../images/icse2017.jpg"
import Icse2019 from "../images/icse2019.jpg"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

function Header(props) {
  const { container } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [openProc, setOpenProc] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleClick = () => {
    setOpenProc(!openProc)
  }

  const drawer = (
    <>
    <List>
      <ListItemLink href="/">
        <ListItemText primary="Home" />
      </ListItemLink>
    </List>
    <List
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        PROCEEDING
      </ListSubheader>
    }
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={"ICSE"} />
        {openProc ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openProc} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Divider variant="inset" component="li" />
        <ListItemLink href="/proc2015/" className={classes.nested}>
            <ListItemAvatar>
              <Avatar alt="Icon" src={Icse2015} />
            </ListItemAvatar>
            <ListItemText 
            primary="ICSE 2015" 
            secondary={
              <React.Fragment>
                {"ACCESS AND ENGAGEMENT"}
              </React.Fragment>
            }
            />
          </ListItemLink>
          <Divider variant="inset" component="li" />
          <ListItemLink href="/proc2017/" className={classes.nested}>
            <ListItemAvatar>
              <Avatar alt="Icon" src={Icse2017} />
            </ListItemAvatar>
            <ListItemText 
            primary="ICSE 2017" 
            secondary={
              <React.Fragment>
                {"ACCESS AND ENGAGEMENT"}
              </React.Fragment>
            }
            />
          </ListItemLink>
          <Divider variant="inset" component="li" />
          <ListItemLink href="/proc2019/" className={classes.nested}>
            <ListItemAvatar>
              <Avatar alt="Icon" src={Icse2019} />
            </ListItemAvatar>
            <ListItemText 
            primary="ICSE 2019" 
            secondary={
              <React.Fragment>
                {"ELEVATING INNOVATION FOR SUSTAINABLE DEVELOPMENT OF SPECIAL NEEDS EDUCATION"}
              </React.Fragment>
            }
            />
          </ListItemLink>
          <Divider variant="inset" component="li" />
        </List>
      </Collapse>
      <ListItemLink href="/terms/">
        <ListItemText primary="Terms & Condition" />
      </ListItemLink>
    </List>
    </>
  )

  return (
    <>
      <CssBaseline />
      <HideOnScrollToDown {...props}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              ICSE Publications
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScrollToDown>
      <nav className={classes.drawer} aria-label="prooceding sidebar">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
