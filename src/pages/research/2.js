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
                citationTitle="Teacher’s Ability in Identifying Pupils With Disability in Classroom, Kapit, Sarawak"
                citationPdfUrl="https://publication.seameosen.org/pdf/research/2019/2-2019.pdf"
                citationAuthor="Nur Kamariah Ensimau, Mohd Isa Hamzah, Mohd Hanafi Mohd Yassin, Mohd Mokhtar Tahar, Zolkepeli Haron, Mohd Jasmy Abdul, Rahman, Safani Bari, Mohd Anis Abdul Razak, Amiruddin Abu Samah"
                citationPubDate="2019/7/15"
            />
            <Typography component={"div"} variant="body1" gutterBottom>
                <div className={classes.padded}></div>
                <Card>
                    <CardContent>
                        <Typography component={"div"}>
                            <Typography component={"div"} variant="h6">
                                Teacher’s Ability in Identifying Pupils With Disability in Classroom, Kapit, Sarawak
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                            >
                                Presented at: 3rd ICSE Surabaya, Indonesia
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                Date on: 13 - 15 July 2019
                            </Typography>
                            <Typography component={"div"} variant="body1">
                                Authors:
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                Nur Kamariah Ensimau, Mohd Isa Hamzah, Mohd Hanafi Mohd Yassin, Mohd Mokhtar Tahar, Zolkepeli Haron, Mohd Jasmy Abdul, Rahman, Safani Bari, Mohd Anis Abdul Razak, Amiruddin Abu Samah
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
                            Early intervention will help special education need student to get early enforcement in learning. Therefore, this study aims is to identify teacher strategies and ability in identifying students with special needs. This mix method study involve 16 respondent in qualitative study while 219 respondent in quantitative study. The sample is convenience sampling and the data analysis with SPSS and thematic analysis. The research findings was 50.2 % respondent achieve mastery level while 49.8% was below mastery level. The research also found that respondent able to identify student with SEN based on their appearance and behavior. Therefore. The qualitative found that majority of respondents able to identify students with disabilities thru student’s behavior and characteristic while some of respondents identify pupils based on academic performance including students’ abilities to read and write
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="large"
                            href="/pdf/research/2019/2-2019.pdf"
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
