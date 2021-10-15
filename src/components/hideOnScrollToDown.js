import React from "react"
import PropTypes from "prop-types"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Slide from "@mui/material/Slide"

const HideOnScrollToDown = ({ children }) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScrollToDown.propTypes = {
  children: PropTypes.element.isRequired,
}

export default HideOnScrollToDown
