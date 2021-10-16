import React from "react"
import Seo from "../../components/scholarSeo"
import makeStyles from "@mui/styles/makeStyles"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"

const useStyles = makeStyles((theme) => ({
  oblique: {
    fontStyle: "oblique",
    textAlign: "justify",
    textJustify: "inter-word",
  },
}))

const ResearchPage = () => {
  const classes = useStyles()

  return (
    <>
      <Seo
        title="Penggunaan Kaedah Pengajaran Kontekstual Untuk Murid-Murid Pendidikan Khas Kurang Upaya Pendengaran"
        citationTitle="Penggunaan Kaedah Pengajaran Kontekstual Untuk Murid-Murid Pendidikan Khas Kurang Upaya Pendengaran"
        citationPdfUrl="https://publication.seameosen.org/pdf/research/2020/4-2020.pdf"
        citationAuthor="Safani Bari, Salmah Jopri, Mohd Anis Abdul Razak, Rajesvari Ramasamy, Nancy William Awet"
        citationPubDate="2020/3/30"
      />
      <Typography component={"div"} variant="body1" gutterBottom>
        <Card>
          <CardContent>
            <Typography component={"div"}>
              <Typography component={"div"} variant="h6">
                Penggunaan Kaedah Pengajaran Kontekstual Untuk Murid-Murid
                Pendidikan Khas Kurang Upaya Pendengaran
              </Typography>
              <Typography className={classes.title} color="textSecondary">
                Presented at: ICSAR Tsukuba, Jepun
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Date on: 24 - 30 Mac 2020
              </Typography>
              <Typography component={"div"} variant="body1">
                Authors:
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Safani Bari, Salmah Jopri, Mohd Anis Abdul Razak, Rajesvari
                Ramasamy, Nancy William Awet
              </Typography>
            </Typography>
            <Typography component={"div"} variant="body1">
              Abstract:
            </Typography>
            <Typography className={classes.oblique}>
              The objective of this study was to evaluate the effectiveness of
              contextual teaching method in teaching comprehension of words and
              phrases’. This pretest-posttest design quasi-experimental study
              compared any differences in achievement between the two groups of
              hearing-impaired students. The students were divided into two
              groups whereby the experimental group was taught using the
              contextual method and the control group the traditional method. A
              total of 120 hearing-impaired students from eight schools in
              peninsular Malaysia were used as subjects for the study. There
              were 60 students in the experimental group and 60 in the control
              group. Data on overall proficiency were analyzed using descriptive
              analysis. The results revealed that the overall performance of the
              experimental group on all two language skills show a higher mean
              increase compared to the control group. Thus, the findings
              indicate that the contextual method used by the teachers was able
              to increase the students’ Language skills and had contributed the
              general academic achievement of the students.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              href="/pdf/research/2020/4-2020.pdf"
              target="_blank"
              rel="noopener"
              variant="outlined"
            >
              Download PDF
            </Button>
          </CardActions>
        </Card>
      </Typography>
    </>
  )
}

export default ResearchPage
