import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import Collapse from "@material-ui/core/Collapse"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import ListSubheader from "@material-ui/core/ListSubheader"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

const Drawers = () => {
  const classes = useStyles()
  const [openProc, setOpenProc] = React.useState(false)
  const handleClick = () => {
    setOpenProc(!openProc)
  }

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
      <List>
        <ListItemLink href="/">
          <ListItemText primary="Home" />
        </ListItemLink>
      </List>
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            PROCEEDING
          </ListSubheader>
        }
      >
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"ICSE"} />
          {openProc ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProc} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Divider variant="inset" component="li" />
            <ListItemLink href="/proc2015/" className={classes.nested}>
              <ListItemAvatar>
                <Avatar alt="Icon" src="/img/icse2015icon.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="ICSE 2015"
                secondary={
                  <React.Fragment>{"ACCESS AND ENGAGEMENT"}</React.Fragment>
                }
              />
            </ListItemLink>
            <Divider variant="inset" component="li" />
            <ListItemLink href="/proc2017/" className={classes.nested}>
              <ListItemAvatar>
                <Avatar alt="Icon" src="/img/icse2017icon.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="ICSE 2017"
                secondary={
                  <React.Fragment>{"ACCESS AND ENGAGEMENT"}</React.Fragment>
                }
              />
            </ListItemLink>
            <Divider variant="inset" component="li" />
            <ListItemLink href="/proc2019/" className={classes.nested}>
              <ListItemAvatar>
                <Avatar alt="Icon" src="/img/icse2019icon.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="ICSE 2019"
                secondary={
                  <React.Fragment>
                    {
                      "ELEVATING INNOVATION FOR SUSTAINABLE DEVELOPMENT OF SPECIAL NEEDS EDUCATION"
                    }
                  </React.Fragment>
                }
              />
            </ListItemLink>
            <Divider variant="inset" component="li" />
          </List>
        </Collapse>
        <ListItemLink href="/terms/">
          <ListItemText primary="Terms & Condition" />
        </ListItemLink>
      </List>
    </>
  )
}

export default Drawers
