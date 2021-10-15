import React from "react"
import Seo from "../../components/seo"
import makeStyles from '@mui/styles/makeStyles';
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"

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
                citationTitle="Tahap Kesedaran Guru Tahap 1 Terhadap Kepelbagaian Murid Berkeperluan Khas Dalam Bilik Darjah"
                citationPdfUrl="https://publication.seameosen.org/pdf/research/2019/3-2019.pdf"
                citationAuthor="Safani Bari, Mohd Anis Abdul Razak, Amiruddin Abu Samah, Mohd Isa Hamzah, Mohd Hanafi Mohd Yassin, Mohd Mokhtar Tahar, Zolkepeli Harun, Mohd Jasmy Abd Rahman, Nur Kamariah Ensimau Abdullah"
                citationPubDate="2019/3/30"
            />
            <Typography component={"div"} variant="body1" gutterBottom>
                <div className={classes.padded}></div>
                <Card>
                    <CardContent>
                        <Typography component={"div"}>
                            <Typography component={"div"} variant="h6">
                                Tahap Kesedaran Guru Tahap 1 Terhadap Kepelbagaian Murid Berkeperluan Khas Dalam Bilik Darjah
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                            >
                                Presented at: SEAMEO SEN Governing Board Meeting, Pulau Langkawi, Kedah, Malaysia
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                Date on: 24 - 30 Mac 2019
                            </Typography>
                            <Typography component={"div"} variant="body1">
                                Authors:
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                Safani Bari, Mohd Anis Abdul Razak, Amiruddin Abu Samah, Mohd Isa Hamzah, Mohd Hanafi Mohd Yassin, Mohd Mokhtar Tahar, Zolkepeli Harun, Mohd Jasmy Abd Rahman, Nur Kamariah Ensimau Abdullah
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
                            Kajian ini bertujuan untuk meninjau tahap pengetahuan dan kemahiran guru tahap 1 di sekolah pedalaman dan bagaimana guru-guru ini dalam menangani kepelbagaian murid pendidikan khas. Ini termasuklah merungkai permasalahan guru dalam pengajaran dan pembelajaran dalam bilik darjah.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="large"
                            href="/pdf/research/2019/3-2019.pdf"
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
