import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Header from "./header"
import Footer from "./footer"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

function Layout(props) {
  const { children } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>{children}</Typography>
        <div className={classes.toolbar} />
        <Footer />
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
