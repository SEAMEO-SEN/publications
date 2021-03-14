import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import YouTubeIcon from "@material-ui/icons/YouTube"
import Button from "@material-ui/core/Button"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

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

const Footer = () => {
  const classes = useStyles()

  return (
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
        <Button size="large" href="/terms/" color="inherit">
          Copyright &copy; {new Date().getFullYear()} SEAMEO SEN All Rights
          Reserved
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
