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
        title="The Rural Teacher’s Ability, Knowledge and Skill in Early Identification of Children with Special Needs"
        citationTitle="The Rural Teacher’s Ability, Knowledge and Skill in Early Identification of Children with Special Needs"
        citationPdfUrl="https://publication.seameosen.org/pdf/research/2020/5-2020.pdf"
        citationAuthor="Salmah Jopri, Mohd Anis Abdul Razak, Mohd Isa Hamzah, Nur Kamariah Ensimau, Safani Bari, Mohd Hanafi Mohd Yasin, Mokhtar Tahar, Zolkepeli Haron, Mohd Jasmy Abdul Rahman"
        citationPubDate="2020/3/30"
      />
      <Typography component={"div"} variant="body1" gutterBottom>
        <Card>
          <CardContent>
            <Typography component={"div"}>
              <Typography component={"div"} variant="h6">
                The Rural Teacher’s Ability, Knowledge and Skill in Early
                Identification of Children with Special Needs
              </Typography>
              <Typography className={classes.title} color="textSecondary">
                Presented at: ICSAR Tsukuba, Jepun
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Date on: 24 - 30 March 2020
              </Typography>
              <Typography component={"div"} variant="body1">
                Authors:
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Salmah Jopri, Mohd Anis Abdul Razak, Mohd Isa Hamzah, Nur
                Kamariah Ensimau, Safani Bari, Mohd Hanafi Mohd Yasin, Mokhtar
                Tahar, Zolkepeli Haron, Mohd Jasmy Abdul Rahman
              </Typography>
            </Typography>
            <Typography component={"div"} variant="body1">
              Abstract:
            </Typography>
            <Typography className={classes.oblique}>
              Early intervention will help special educational needs (SEN)
              children to get early enforcement in learning. Therefore, this
              study aims is to identify teacher’s ability, knowledge and skill
              in identifying children with special needs. The method used in
              this study is mix method. The data is analysed in qualitative and
              quantitative. The sample in qualitative method involved 16
              respondents while 219 respondents in quantitative method. The
              research findings was 50.2 % respondents achieve mastery level
              while 49.8 % was below mastery level. The research also found that
              respondent able to identify children with SEN based on their
              appearance and behavior. Therefore, the qualitative found that
              majority of respondents able to identify children with
              disabilities through children’s behavior and characteristic while
              some of respondents identify pupils based on academic performance
              including children’s abilities to read and write.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              href="/pdf/research/2020/5-2020.pdf"
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
