import React from "react"
import Seo from "../../components/seo"
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
                citationTitle="The Rural Teacher’s Ability, Knowledge and Skill in Early Identification of Children with Special Needs"
                citationPdfUrl="https://publication.seameosen.org/pdf/research/2020/5-2020.pdf"
                citationAuthor="Salmah Jopri, Mohd Anis Abdul Razak, Mohd Isa Hamzah, Nur Kamariah Ensimau, Safani Bari, Mohd Hanafi Mohd Yasin, Mokhtar Tahar, Zolkepeli Haron, Mohd Jasmy Abdul Rahman"
                citationPubDate="2020/3/30"
            />
            <Typography component={"div"} variant="body1" gutterBottom>
                <div className={classes.padded}></div>
                <Card>
                    <CardContent>
                        <Typography component={"div"}>
                            <Typography component={"div"} variant="h6">
                                The Rural Teacher’s Ability, Knowledge and Skill in Early Identification of Children with Special Needs
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                            >
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
                                Salmah Jopri, Mohd Anis Abdul Razak, Mohd Isa Hamzah, Nur Kamariah Ensimau, Safani Bari, Mohd Hanafi Mohd Yasin, Mokhtar Tahar, Zolkepeli Haron, Mohd Jasmy Abdul Rahman
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
                            Early intervention will help special educational needs (SEN) children to get early enforcement in learning. Therefore, this study aims is to identify teacher’s ability, knowledge and skill in identifying children with special needs. The method used in this study is mix method. The data is analysed in qualitative and quantitative. The sample in qualitative method involved 16 respondents while 219 respondents in quantitative method. The research findings was 50.2 % respondents achieve mastery level while 49.8 % was below mastery level. The research also found that respondent able to identify children with SEN based on their appearance and behavior. Therefore, the qualitative found that majority of respondents able to identify children with disabilities through children’s behavior and characteristic while some of respondents identify pupils based on academic performance including children’s abilities to read and write.
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
                <div className={classes.padded}></div>
            </Typography>
        </>
    )
}

export default ResearchPage
