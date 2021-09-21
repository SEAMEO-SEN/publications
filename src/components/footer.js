import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import YouTubeIcon from "@material-ui/icons/YouTube"
import Button from "@material-ui/core/Button"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import HideOnScrollToDown from "./hideOnScrollToTop"
import { Link } from "gatsby"

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 260,
    },
  },
  title: {
    flexGrow: 1,
  },
}))

const Footer = (props) => {
  const classes = useStyles()

  return (
    <HideOnScrollToDown {...props}>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Button
          size="large"
          href="https://facebook.seameosen.org"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <FacebookIcon />
        </Button>
        <Button
          size="large"
          href="https://twitter.seameosen.org"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <TwitterIcon />
        </Button>
        <Button
          size="large"
          href="https://youtube.seameosen.org"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <YouTubeIcon />
        </Button>
        <div className={classes.title} />
        <Button component={Link} size="large" to="/terms/" color="inherit">
          Copyright &copy; {new Date().getFullYear()} SEAMEO SEN All Rights
          Reserved
        </Button>
      </Toolbar>
    </AppBar>
    </HideOnScrollToDown>
  )
}

export default Footer
