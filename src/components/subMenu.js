import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
  float: {
    position: "fixed",
    top: 100,
    right: 30,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))

const SubMenu = () => {
  const classes = useStyles()

  return (
    <Grid item sm={2} className={classes.float} id="miniMenu">
      Contents <br />
      <Button size="large" href="#title">
        Title
      </Button>
      <br />
      <Button size="large" href="#chiefEditor">
        Chief Editors
      </Button>
      <br />
      <Button size="large" href="#articleReviewer">
        Article Reviewers
      </Button>
      <br />
      <Button size="large" href="#procCommittee">
        Proceeding Committee
      </Button>
      <br />
      <Button size="large" href="#preface">
        Preface
      </Button>
      <br />
      <Button size="large" href="#theme">
        Theme
      </Button>
      <br />
      <Button size="large" href="#cofObjective">
        Conference objectives
      </Button>
      <br />
      <Button size="large" href="#tarParticipant">
        Target Participants
      </Button>
      <br />
      <Button size="large" href="#msgDirector">
        Message from The Director of SEAMEO SEN
      </Button>
      <br />
      <Button size="large" href="#listOfPaper">
        List of Full Paper
      </Button>
      <br />
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
    </Grid>
  )
}

export default SubMenu
