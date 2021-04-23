import React from "react"
import Seo from "../components/seo"
import data from "./research/data"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
  padded: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
  oblique: {
    fontStyle: "oblique",
    textAlign: "justify",
    textJustify: "inter-word",
  },
  padBottom: {
    paddingBottom: theme.spacing(0.5),
  }
}))

const ResearchPage = () => {
  const classes = useStyles()

  return (
    <>
      <Seo
        title="SEAMEO SEN Research Paper"
        description="List of SEAMEO SEN Research Papers"
        author="SEAMEO SEN"
      />
      <Typography variant="h3" gutterBottom>
        SEAMEO SEN'S Articles
      </Typography>
      <Typography component={"div"} variant="body1" gutterBottom>
        {data.papers.map((paper, i) => (
          <div key={i}>
            <div className={classes.padded}></div>
            <Typography component={"div"} variant="h4" gutterBottom>
              Year {paper.publicationYear}
            </Typography>
            <div className={classes.padded}></div>
            {paper.listOfPapers.map((listOfPaper, j) => (
              <div key={j}>
                <Card>
                  <CardContent>
                    <Typography component={"div"}>
                      <Typography component={"div"} variant="h6">
                        {listOfPaper.title}
                      </Typography>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Presented at: {listOfPaper.presentedAt}
                      </Typography>
                      <Typography component={"div"} variant="body1">
                        Authors:
                      </Typography>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        {listOfPaper.authors}
                      </Typography>
                    </Typography>
                    <Typography
                      className={classes.padBottom}
                      component={"div"}
                      variant="body1"
                    >
                      Abstract:
                    </Typography>
                    <Typography className={classes.oblique}>
                      {listOfPaper.abstract}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="large"
                      href={
                        "/pdf/research/" +
                        paper.publicationYear +
                        "/" +
                        listOfPaper.docName
                      }
                      target="_blank"
                      rel="noopener"
                      variant="outlined"
                    >
                      Download PDF
                    </Button>
                  </CardActions>
                </Card>
                <div className={classes.padded}></div>
              </div>
            ))}
          </div>
        ))}
      </Typography>
    </>
  )
}

export default ResearchPage
