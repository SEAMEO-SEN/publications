import React from "react"
import Seo from "../../components/scholarSeo"
import makeStyles from '@mui/styles/makeStyles';
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
                citationTitle="An Awareness Among Level One Teachers Towards Sen In Kapit, Sarawak: A Qualitative Study"
                citationAuthor="Mohd Isa Hamzah, Mohd Hanafi Yasin, Mokhtar Tahar, Safani Bari, Zolkepeli Haron, Mohd Jasmay Abdul Rahman, Mohd Anis Abdul Razak, Amiruddin Abu Samah, Nur Kamariah Ensimau"
                citationPdfUrl="https://publication.seameosen.org/pdf/research/2019/1-2019.pdf"
                citationPubDate="2019/3/24"
            />
            <Typography component={"div"} variant="body1" gutterBottom>
                <Card>
                    <CardContent>
                        <Typography component={"div"}>
                            <Typography component={"div"} variant="h6">
                                An Awareness Among Level One Teachers Towards Sen In Kapit, Sarawak: A Qualitative Study
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                            >
                                Presented at: ICSAR Bandung, Indonesia
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                Date on: 24 March 2019
                            </Typography>
                            <Typography component={"div"} variant="body1">
                                Authors:
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                Mohd Isa Hamzah, Mohd Hanafi Yasin, Mokhtar Tahar, Safani Bari, Zolkepeli Haron, Mohd Jasmay Abdul Rahman, Mohd Anis Abdul Razak, Amiruddin Abu Samah, Nur Kamariah Ensimau.
                            </Typography>
                        </Typography>
                        <Typography
                            component={"div"}
                            variant="body1"
                        >
                            Abstract:
                        </Typography>
                        <Typography className={classes.oblique}>
                            Highly awareness of the need for special education needs students will helps teachers to prepare their learning process in classroom neatly. Therefore, the purpose of this study was to identify the awareness among level one teachers towards student with special education needs (SEN) and how they conduct these diversity leaners in the classroom. This qualitative study applied conveniences sampling and had involved 16 respondents in in -depth interview. The respondent were selected among level on teachers from four different rural schools. In order to analyse the data, thematic analysis had been applied. As a results, majority respondent show their awareness with action, while some of them show their awareness with concern, meanwhile only a few of them show their awareness with knowledge.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="large"
                            href="/pdf/research/2019/1-2019.pdf"
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
