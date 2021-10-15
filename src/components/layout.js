import React, { useState } from "react"
import PropTypes from "prop-types"
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";
import Toolbar from '@mui/material/Toolbar';
import Header from "./header"
import Footer from "./footer"
import Fab from "@mui/material/Fab"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import ScrollTop from "./scrollToTop"
import Box from '@mui/material/Box';

import { indigo, pink } from '@mui/material/colors';

const drawerWidth = 240

const Layout = ({ children, props }) => {

  const [theme, setTheme] = useState("light")

  const toggleDarkTheme = () => {
    let newPaletteType = theme === "light" ? "dark" : "light"
    setTheme(newPaletteType)
  }

  const muiTheme = createTheme(({
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
        <Box sx={{ display: 'flex' }}>
          <Header onToggleDark={toggleDarkTheme} />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar id="back-to-top-anchor" />
            {children}
            <Toolbar />
            <ScrollTop {...props}>
              <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
