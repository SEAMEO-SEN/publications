import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import YouTubeIcon from "@material-ui/icons/YouTube"
import Button from "@material-ui/core/Button"

const drawerWidth = 260

const useStyles = makeStyles(theme => ({
  footer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    background: "#283593",
    color: "white",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: drawerWidth,
    },
  },
  whiteColor: {
    color: "white",
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <Button
        size="big"
        href="https://facebook.seameosen.org"
        target="_blank"
        rel="noopener"
      >
        <FacebookIcon className={classes.whiteColor} />
      </Button>
      <Button
        size="big"
        href="https://twitter.seameosen.org"
        target="_blank"
        rel="noopener"
      >
        <TwitterIcon className={classes.whiteColor} />
      </Button>
      <Button
        size="big"
        href="https://youtube.seameosen.org"
        target="_blank"
        rel="noopener"
      >
        <YouTubeIcon className={classes.whiteColor} />
      </Button>
      <Button size="big" href="/terms/" className={classes.whiteColor}>
        Copyright &copy; 2019 SEAMEO SEN All Rights Reserved
      </Button>
    </div>
  )
}

export default Footer
