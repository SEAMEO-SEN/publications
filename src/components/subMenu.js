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
      <Button size="big" href="#title">
        Title
      </Button>
      <br />
      <Button size="big" href="#chiefEditor">
        Chief Editors
      </Button>
      <br />
      <Button size="big" href="#articleReviewer">
        Article Reviewers
      </Button>
      <br />
      <Button size="big" href="#procCommittee">
        Proceeding Committee
      </Button>
      <br />
      <Button size="big" href="#preface">
        Preface
      </Button>
      <br />
      <Button size="big" href="#theme">
        Theme
      </Button>
      <br />
      <Button size="big" href="#cofObjective">
        Conference objectives
      </Button>
      <br />
      <Button size="big" href="#tarParticipant">
        Target Participants
      </Button>
      <br />
      <Button size="big" href="#msgDirector">
        Message from The Director of SEAMEO SEN
      </Button>
      <br />
      <Button size="big" href="#listOfPaper">
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
