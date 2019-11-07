import React from "react"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  float: {
    position: "fixed",
    top: 100,
    right: 30,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))

const Proc2015 = () => {
  const classes = useStyles()

  return (
    <>
      <SEO title="Proceeding 2015" />
      <h1>This page is still in updating progress...</h1>
      <div className={classes.float}>
        <a
          href="https://www.trendcounter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.trendcounter.com/w/track/04b9173500.png"
            alt="Web Analytics"
          />
        </a>
      </div>
    </>
  )
}

export default Proc2015
