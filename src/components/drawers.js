import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Grid from "@mui/material/Grid"
import { Link } from "gatsby"
import MenuItem from "@mui/material/MenuItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListSubheader from "@mui/material/ListSubheader"
import Divider from "@mui/material/Divider"
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  padded: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
}))

const Drawers = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <StaticImage
          src="../images/seameosen.png"
          alt="SEAMEO SEN Logo"
          placeholder="blurred"
        />
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
            PROCEEDINGS
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
          <Typography variant="inherit">Proceedings 2017</Typography>
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
          <Typography variant="inherit">Proceedings 2019</Typography>
        </MenuItem>
        <MenuItem
          component={Link}
          to="/proc2021/"
          activeStyle={{ color: "red" }}
          className={classes.padded}
        >
          <ListItemAvatar>
            <Avatar alt="Icon" src="/img/icse2021icon.jpg" />
          </ListItemAvatar>
          <Typography variant="inherit">Proceedings 2021</Typography>
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
