import React, { useState } from "react"
import PropTypes from "prop-types"
import { ThemeProvider, StyledEngineProvider, createTheme, adaptV4Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import Header from "./header"
import Footer from "./footer"
import Fab from "@mui/material/Fab"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import ScrollTop from "./scrollToTop"

import { indigo, pink } from '@mui/material/colors';

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

  const muiTheme = createTheme(adaptV4Theme({
    palette: {
      mode: theme,
      primary: indigo,
      secondary: pink,
    },
    typography: {
      fontFamily: ['"Roboto Slab"'],
    },
  }))

  return (
    <StyledEngineProvider injectFirst>
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
    </StyledEngineProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
