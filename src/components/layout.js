import React, { useState } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Header from "./header"
import Footer from "./footer"
import Fade from "@material-ui/core/Fade"
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from "./scrollToTop"

const drawerWidth = 260

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: drawerWidth,
    },
  },
}))

function Layout(props) {
  const { children } = props
  const classes = useStyles()
  const [state] = useState(false)

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <div className={classes.toolbar} id="back-to-top-anchor"/>
        <Fade in={!state}>
          <div>{children}</div>
        </Fade>
        <div className={classes.toolbar} />
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
