import React from "react"
import Seo from "../components/seo"
import Typography from "@mui/material/Typography"
import data from "./icseproc2021/data"
import makeStyles from "@mui/styles/makeStyles"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import theme from "../components/theme"

const useStyles = makeStyles(() => ({
  padBottom: {
    paddingBottom: theme.spacing(3),
  },
  justifyText: {
    textAlign: "justify",
    textJustify: "inter-word",
  },
  padhref: {
    marginTop: -80,
    paddingBottom: 80,
    display: "block",
  },
  abstractTitle: {
    paddingBottom: theme.spacing(0.5),
  },
  abstract: {
    fontStyle: "oblique",
    textAlign: "justify",
    textJustify: "inter-word",
  },
  float: {
    position: "fixed",
    top: 80,
    right: 30,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}))

const Proc2021 = () => {
  const classes = useStyles()

  return (
    <>
      <Seo
        title="4th International Conference for Special Education 2021 (ICSE 2021)"
        description="4th International Conference for Special Education 2021 (ICSE 2021) by SEAMEO SEN, Theme: Inclusion: A New Curve, e-ISBN: 978-967-15154-3-3"
        author="SEAMEO SEN"
      />
      <Grid container spacing={1}>
        <Grid item xs={12} md={9}>
          <span className={classes.padhref} id="title"></span>
          <Typography variant="h4" gutterBottom>
            {data.conferenceTitle}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {data.conferenceSubTitle}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {data.isbnNumber}
          </Typography>
          <span className={classes.padhref} id="chiefEditor"></span>
          <Typography variant="h6">Chief Editors:</Typography>
          <Typography component={"div"} variant="body1" gutterBottom>
            <ul>
              {data.nameOfChiefEditors.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Typography>
          <span className={classes.padhref} id="articleReviewer"></span>
          <Typography variant="h6">Article Reviewers:</Typography>
          <Typography component={"div"} variant="body1" gutterBottom>
            <ul>
              {data.nameOfArticleReviewers.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Typography>
          <span className={classes.padhref} id="procCommittee"></span>
          <Typography variant="h6">Proceedings Committee ICSE 2021:</Typography>
          <Typography variant="body1">
            <strong>Technical Editors</strong>
          </Typography>
          <Typography component={"div"} variant="body1" gutterBottom>
            <ul>
              {data.technicalEditors.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Typography>
          <Typography variant="body1">
            <strong>Administrative</strong>
          </Typography>
          <Typography component={"div"} variant="body1">
            <ul>
              {data.administrative.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Typography>
          <Typography variant="body1">
            <strong>Finance</strong>
          </Typography>
          <Typography component={"div"} variant="body1">
            <ul>
              {data.finance.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Typography>
          <Typography variant="body1">
            <strong>Design and Layout</strong>
          </Typography>
          <Typography component={"div"} variant="body1">
            <ul>
              {data.design.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Typography>
          <Typography variant="body1">
            <strong>Distribution</strong>
          </Typography>
          <Typography component={"div"} variant="body1">
            <ul>
              {data.distribution.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Typography>
          <span className={classes.padhref} id="preface"></span>
          <Typography variant="h6">Preface</Typography>
          <Typography variant="body1" className={classes.justifyText}>
            Around the world, children are excluded from schools where they
            belong because of disability, race, language, religion, gender, and
            poverty. According to the Individuals with Disabilities Education
            Act (IDEA), students with special educational needs have the right
            to receive necessary curricular adaptations. Every child has the
            ability to learn, but the way children learn and how much knowledge
            they can absorb can vary considerably, especially for a child with
            special educational needs. Yet, as a society we owe all children a
            chance to reach their potential, so it is important to create the
            best possible learning environment for that to happen. That’s why
            many people suggest mainstreaming special-needs children into
            regular classrooms rather than assigning them exclusively to special
            education classes. When all children, regardless of their
            differences, are educated together, everyone benefits, this is the
            cornerstone of inclusive education. Inclusive education has been
            discussed for more than twenty years. Both scholars and media
            brought up the inclusive education issue to bring awareness of it to
            society, and that momentum helps parents of SEN students to speak up
            for their offspring‘s rights. With the support from the law,
            legislation and society, drives or assists SEN students to equally
            access educational services, in the same way as students without
            disabilities. Within this contention, the 4th ICSE Conference would
            provide the opportunity, space and a spectrum of perspectives for
            educators and those involved in education especially in the field of
            Special Education to share, discuss and further developing actions
            that would enhance the lives of children with disabilities. Current
            development and research based practices and models in teaching and
            learning as well as best practices will be disseminated in this
            conference.
          </Typography>
          <div className={classes.padBottom} />
          <span className={classes.padhref} id="theme"></span>
          <Typography variant="h6">Theme</Typography>
          <Typography variant="body1" gutterBottom>
            The themes for 4th ICSE 2021 is “INCLUSION: A NEW CURVE” and
            supported by 16 sub-themes
          </Typography>
          <Typography component={"div"} variant="body1">
            <ul>
              {data.listOfSubTheme.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Typography>
          <div className={classes.padBottom} />
          <span className={classes.padhref} id="cofObjective"></span>
          <Typography variant="h6">Conference objectives</Typography>
          <Typography
            component={"div"}
            variant="body1"
            className={classes.justifyText}
          >
            <ul>
              {data.conferenceObjective.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Typography>
          <span className={classes.padhref} id="tarParticipant"></span>
          <Typography variant="h6">Target Participants</Typography>
          <Typography variant="body1" className={classes.justifyText}>
            The 4th ICSE 2021 is expected to be attended by 1,500 participants
            and delegates from Southeast Asia Countries and all around the world
            comprises of prominent speakers, teachers, educators, stakeholders,
            NGOs, parents, students, researchers, special education providers,
            policy makers, officials of MOE and interested individuals
          </Typography>
          <div className={classes.padBottom} />
          <span className={classes.padhref} id="msgDirector"></span>
          <Typography variant="h6">
            Message from The Director of SEAMEO SEN
          </Typography>
          <Typography variant="body1" className={classes.justifyText}>
            Dear delegates of the 4th International Conference for Special
            Education (ICSE) 2021.
            <br />
            Warm greetings from SEAMEO SEN.
            <br />
            It is my great pleasure to welcome you to the 4th ICSE 2021, which
            takes place virtually this time. Following the synergy effort from
            the past ICSE conferences, the 4th ICSE 2021 proceeding will be the
            fourth proceeding published and set to act as evidence of
            research-based practices that will contribute to build knowledge and
            expertise of Special Education teachers in this region and beyond.
            SEAMEO SEN is committed to its vision and mission as a leading
            centre of excellence in Special Education in this region. This
            conference is a definitive effort and hard work by SEAMEO SEN to
            present opportunities and platforms for convergence of discussion
            and current ideas in Special Education to all its attendees. The
            papers published in this proceeding are written and documented based
            on the sub-themes of the conference which aimed to break open new
            trends and ideas, focusing on inclusive education, innovations, best
            practices in teaching and learning pedagogy within the Special
            Education sphere. On behalf of the proceeding committee team of the
            4th ICSE 2021, allow me to extend my appreciative note to the
            presenters who have contributed to the papers in this proceeding. It
            is within our high hopes that with this proceeding publication, it
            will be used as a reference and source of information for educators
            and communities as a whole. I am also extending my utmost
            appreciation to the experts of the reviewing team, the technical
            writers and the whole team from SEAMEO SEN for the publication of
            this proceeding. May all of us continue to work harder and become
            more resilient in our endeavour to champion the cause for the
            learners with disabilities and communities in this region.
            <br />
            Together, we strive for excellence.
            <br />
            Dr. Hajah Hanani Harun Rasit, Director of SEAMEO Regional Centre For
            Special Educational Needs (SEAMEO SEN)
          </Typography>
          <div className={classes.padBottom} />
          <span className={classes.padhref} id="listOfPaper"></span>
          <Typography variant="h6">List of Full Paper:</Typography>
          <div className={classes.padBottom}></div>
          <Typography component={"div"} variant="body1">
            {data.papers.map((paper, i) => (
              <div key={i}>
                <Typography component={"div"} variant="body1">
                  <Box fontWeight="fontWeightBold">{paper.subTheme}</Box>
                </Typography>
                <div className={classes.padBottom}></div>
                {paper.listOfPapers.map((listOfPaper, j) => (
                  <div key={j}>
                    <Card>
                      <CardContent>
                        <Typography component={"div"}>
                          <Typography component={"div"} variant="body1">
                            <Box fontWeight="fontWeightBold">
                              {listOfPaper.title}
                            </Box>
                          </Typography>
                          <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            {listOfPaper.authors}
                          </Typography>
                        </Typography>
                        <Typography component={"div"}>
                          <Typography className={classes.abstractTitle}>
                            Abstract:
                          </Typography>
                          <Typography className={classes.abstract}>
                            {listOfPaper.abstract}
                          </Typography>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="large"
                          href={
                            "/pdf/icse/2021/" + listOfPaper.paperId + ".pdf"
                          }
                          target="_blank"
                          rel="noopener"
                          variant="outlined"
                        >
                          Download PDF
                        </Button>
                      </CardActions>
                    </Card>
                    <div className={classes.padBottom}></div>
                  </div>
                ))}
              </div>
            ))}
          </Typography>
        </Grid>
        <Grid item sm={2} className={classes.float} id="miniMenu">
          Contents <br />
          <Button size="small" href="#title">
            Title
          </Button>
          <br />
          <Button size="small" href="#chiefEditor">
            Chief Editors
          </Button>
          <br />
          <Button size="small" href="#articleReviewer">
            Article Reviewers
          </Button>
          <br />
          <Button size="small" href="#procCommittee">
            Proceeding Committee
          </Button>
          <br />
          <Button size="small" href="#preface">
            Preface
          </Button>
          <br />
          <Button size="small" href="#theme">
            Theme
          </Button>
          <br />
          <Button size="small" href="#cofObjective">
            Conference objectives
          </Button>
          <br />
          <Button size="small" href="#tarParticipant">
            Target Participants
          </Button>
          <br />
          <Button size="small" href="#msgDirector">
            Message from The Director of SEAMEO SEN
          </Button>
          <br />
          <Button size="small" href="#listOfPaper">
            List of Full Paper
          </Button>
          <Box sx={{
            paddingTop: 1,
          }} />
          <Button
            sx={{
              textAlign: "center",
            }}
            href={
              "/pdf/icse/2021/icse2021full.pdf"
            }
            target="_blank"
            rel="noopener"
            variant="contained" size="small">
            DOWNLOAD PROCEEDINGS
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Proc2021
