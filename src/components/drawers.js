import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import MenuItem from "@material-ui/core/MenuItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListSubheader from "@material-ui/core/ListSubheader"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  padded: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
}))

const Drawers = () => {
  const classes = useStyles()
  const seameosen = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "seameosen.png" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Img fixed={seameosen.file.childImageSharp.fixed} />
      </Grid>
      <Divider />
      <MenuItem
        component={Link}
        to="/"
        activeStyle={{ color: "red" }}
        className={classes.padded}
      >
        Home
      </MenuItem>
      <Divider />
      <List
        disablePadding
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            PROCEEDING
          </ListSubheader>
        }
      >
        <MenuItem
          component={Link}
          to="/proc2017/"
          activeStyle={{ color: "red" }}
          className={classes.padded}
        >
          <ListItemAvatar>
            <Avatar alt="Icon" src="/img/icse2017icon.jpg" />
          </ListItemAvatar>
          <Typography variant="inherit">Proceeding 2017</Typography>
        </MenuItem>
        <MenuItem
          component={Link}
          to="/proc2019/"
          activeStyle={{ color: "red" }}
          className={classes.padded}
        >
          <ListItemAvatar>
            <Avatar alt="Icon" src="/img/icse2019icon.jpg" />
          </ListItemAvatar>
          <Typography variant="inherit">Proceeding 2019</Typography>
        </MenuItem>
      </List>
      <Divider />
      <List
        disablePadding
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            SEAMEO SEN'S RESEARCH
          </ListSubheader>
        }
      >
        <MenuItem
          component={Link}
          to="/research/"
          activeStyle={{ color: "red" }}
          className={classes.padded}
        >
          <ListItemAvatar>
            <Avatar alt="Icon" src="/img/badge_logo_seameosen.png" />
          </ListItemAvatar>
          <Typography variant="inherit">List of Articles</Typography>
        </MenuItem>
      </List>
      <Divider />
      <MenuItem
        component={Link}
        to="/terms/"
        activeStyle={{ color: "red" }}
        className={classes.padded}
      >
        Terms
      </MenuItem>
      <Divider />
    </>
  )
}

export default Drawers
