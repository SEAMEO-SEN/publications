import React from "react"
import makeStyles from "@mui/styles/makeStyles"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"
import Button from "@mui/material/Button"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
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
            Copyright &copy; 2017 - {new Date().getFullYear()} SEAMEO SEN All
            Rights Reserved
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScrollToDown>
  )
}

export default Footer
