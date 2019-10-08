import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 260

const useStyles = makeStyles(theme => ({
  footer: {
    background: "#3f51b5",
    color: "white",
    paddingLeft: 0,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: drawerWidth,
    },
  },
}))

function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      Copyright &copy; 2019 SEAMEO SEN All Rights Reserved
    </div>
  )
}

export default Footer
