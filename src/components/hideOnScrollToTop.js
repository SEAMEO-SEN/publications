import React, { useState } from "react"
import PropTypes from "prop-types"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Slide from "@mui/material/Slide"

const HideOnScrollToTop = ({ children }) => {
  const trigger = useScrollTrigger()
  const [state] = useState(true)

  return (
    <Slide appear={false} direction="up" in={!trigger || !state}>
      {children}
    </Slide>
  )
}

HideOnScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
}

export default HideOnScrollToTop
