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
    const abstract = "Kajian ini bertujuan untuk membandingkan Kaedah BrailTex dengan Kaedah Konvensional dalam penulisan kod braille gred 1 menggunakan slate dan stylus. Kajian eksperimen dengan gabungan pendekatan kuantitatif dan kualitatif berbentuk merangkumkan QUAN(qual) telah dijalankan di sekolah rendah pendidikan khas bermasalah penglihatan; seramai 18 orang murid bermasalah penglihatan dari Tahun Dua dan Tahun Tiga, sepuluh orang murid buta dan lapan orang murid berpenglihatan terhad terpilih sebagai sampel. Data kualitatif daripada sesi pemerhatian dan temu bual kumpulan berfokus digunakan untuk menyokong dapatan kajian kuantitatif min skor ujian imlak. Data analisis menunjukkan bahawa min pencapaian Kaedah BrailTex(M=76.11, SD=17.81) lebih tinggi dalam penulisan kod braille gred 1 menggunakan slate dan stylus berbanding dengan kumpulan Kaedah Konvensional (M=46.67, SD=24.6) adalah signifikan pada aras 0.05 (t=2.907, p<0.05). Data juga menunjukkan bahawa murid-murid yang menggunakan Kaedah Konvensional cenderung melakukan kesalahan pembalikan daripada murid-murid yang menggunakan Kaedah BrailTex. Satu dapatan yang tidak diduga iaitu min skor ujian imlak murid-murid penglihatan terhad yang tidak pernah didedahkan kepada penulisan braille (M=66.88, SD=26.98) adalah lebih tinggi berbanding dengan murid-murid buta (M=57.0, SD=25.29) dalam penulisan kod braille gred 1 menggunakan S&S. Kajian ini membuktikan bahawa Kaedah BrailTex dapat meningkatkan konsep penguasaan dalam penulisan kod braille menggunakan slate dan stylus selain daripada Kaedah Konvensional. Adalah dicadangkan bahawa Kaedah BrailTex harus digunakan bagi mengajar konsep penulisan kod braille menggunakan S&S."

    return (
        <>
            <Seo
                citationTitle="Penggunaan Brailtex Bagi Meningkatkan Penguasaan Kemahiran Menulis Kod Braille Menggunakan Slate Dan Stylus"
                citationPdfUrl="https://publication.seameosen.org/pdf/research/2020/0-2020.pdf"
                citationAuthor="Kway Eng Hock, Pau Kee, Nurbieta Binti Abdul Aziz, Shahida Binti Hashim"
                citationPubDate="2020/3/30"
            />
            <Typography component={"div"} variant="body1" gutterBottom>
                <div className={classes.padded}></div>
                <Card>
                    <CardContent>
                        <Typography component={"div"}>
                            <Typography component={"div"} variant="h6">
                                Penggunaan Brailtex Bagi Meningkatkan Penguasaan Kemahiran Menulis Kod Braille Menggunakan Slate Dan Stylus
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                            >
                                Presented at: SEAMEO SEN, Malaysia
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                Date on: September 2017 - June 2020
                            </Typography>
                            <Typography component={"div"} variant="body1">
                                Authors:
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                Kway Eng Hock, Pau Kee, Nurbieta Binti Abdul Aziz, Shahida Binti Hashim
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
                            {abstract}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="large"
                            href="/pdf/research/2020/0-2020.pdf"
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
