import React from "react"
import Seo from "../components/seo"
import { Link } from "gatsby"
import makeStyles from '@mui/styles/makeStyles';
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import Button from "@mui/material/Button"
import data from "./index/data"

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 500,
  },
  center: {
    justifyContent: "center",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <>
      <Seo title="Welcome to SEAMEO SEN Publication Site" />
      <Grid container spacing={2}>
        {data.conferences.map((conference, j) => (
          <Grid key={j} item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={conference.confImgCover}
                title={conference.confName}
              />
              <CardHeader
                title={conference.confName}
                subheader={conference.confTheme}
              />
              <CardContent>{conference.place}</CardContent>
              <CardActions className={classes.center}>
                <Button
                  size="large"
                  color="primary"
                  component={Link}
                  to={conference.page}
                  variant="contained"
                  startIcon={<MenuBookIcon />}
                >
                  READ MORE
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default IndexPage
