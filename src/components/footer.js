import React from "react"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"
import Button from "@mui/material/Button"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import HideOnScrollToDown from "./hideOnScrollToTop"
import { Link } from "gatsby"
import Box from '@mui/material/Box';

const drawerWidth = 240

const Footer = (props) => {

  return (
    <HideOnScrollToDown {...props}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          top: 'auto', bottom: 0
        }}>
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
          <Box sx={{ flexGrow: 1 }} />
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
