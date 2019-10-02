import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
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
  grow: {
    flexGrow: 1,
  },
}))

function Footer(props) {
  const classes = useStyles()
  return (
    <HideOnScrollToTop {...props}>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar variant="dense">
          <div className={classes.grow} />
          Copyright &copy; 2019 SEAMEO SEN All Rights Reserved
        </Toolbar>
      </AppBar>
    </HideOnScrollToTop>
  )
}

export default Footer
