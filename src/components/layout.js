import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles"
import Header from "./header"
import Footer from "./footer"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import ScrollTop from "./scrollToTop"

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 260,
    },
  },
}))

const Layout = ({ children, props }) => {
  const classes = useStyles()

  const [theme, setTheme] = useState("light")

  const toggleDarkTheme = () => {
    let newPaletteType = theme === "light" ? "dark" : "light"
    setTheme(newPaletteType)
  }

  const muiTheme = createMuiTheme({
    palette: {
      type: theme,
    },
    typography: {
      fontFamily: ['"Roboto Slab"'],
    },
  })

  return (
    <ThemeProvider theme={muiTheme}>
      <Header onToggleDark={toggleDarkTheme} />
      <main className={classes.content}>
        <div className={classes.toolbar} id="back-to-top-anchor" />
        <div>{children}</div>
        <div className={classes.toolbar} />
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
