import React from "react"
import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import Toolbar from "@material-ui/core/Toolbar"
import SearchIcon from "@material-ui/icons/Search"
import { makeStyles } from "@material-ui/core/styles"
import HideOnScrollToTop from "./hideOnScrollToTop"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
}))

function Footer(props) {
  const classes = useStyles()
  return (
    <HideOnScrollToTop {...props}>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScrollToTop>
  )
}

export default Footer
