import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import Button from "@material-ui/core/Button"
import data from "./index/data"

const useStyles = makeStyles(theme => ({
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

function IndexPage() {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Welcome to SEAMEO SEN Publication Site" />
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
                  size="big"
                  color="primary"
                  href={conference.page}
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
    </Layout>
  )
}

export default IndexPage
