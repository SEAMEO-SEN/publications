import React from "react"
import Seo from "../components/seo"
import Typography from "@mui/material/Typography"
import data from "./icseproc2019/data"
import makeStyles from '@mui/styles/makeStyles';
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

const useStyles = makeStyles(({theme}) => ({
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
    [theme.breakpoints.down('md')]: {
      display: "none",
    },
  },
}))

const Proc2019 = () => {
  const classes = useStyles()

  return (
    <>
      <Seo
        title="3rd International Conference for Special Education 2019 (ICSE 2019)"
        description="3rd International Conference for Special Education 2019 (ICSE 2019) by SEAMEO SEN, Theme: Elevating Innovation for Sustainable Development of Special Needs Education, e-ISBN: 978-967-15154-2-6"
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
          <Typography variant="h6">Proceeding Committee ICSE 2019:</Typography>
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
            The Innovation in Special Education is the key to increase access
            and engagement for persons with disabilities to function in all
            aspects of life and most importantly in the education aspects of
            children with disabilities. Innovation in pedagogical and education
            methods and techniques would significantly impact the lives and
            increase the success rate for children with disabilities to
            experience education contexts that are meaningful. Within this
            contention, the 3rd ICSE Conference would provide the opportunity,
            space and a spectrum of perspectives for educators and those
            involved in education especially in the field of Special Education
            to share, discuss and further developing actions that would enhance
            the lives of children with disabilities through innovations that
            transform the landscape of Special Education. New methods in
            teaching and learning, development of assistive devices, ICT applied
            teaching gadget and use of cyber learning give students with
            disabilities transformative perspectives of their own learning
            capacity and heightened awareness of their capabilities to be
            successful in their lives. Current development and research-based
            practices and models of innovation in teaching and learning as well
            as best practices will be disseminated in this conference.
          </Typography>
          <div className={classes.padBottom} />
          <span className={classes.padhref} id="theme"></span>
          <Typography variant="h6">Theme</Typography>
          <Typography variant="body1" gutterBottom>
            The 3rd ICSE 2019 theme is “Elevating Innovation for Sustainable
            Development of Special Needs Education” and is presented together
            with 17 subthemes
          </Typography>
          <Typography component={"div"} variant="body1">
            <ul>
              {data.listOfSubTheme.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Typography>
          <Typography variant="body1" className={classes.justifyText}>
            Addressing access must be given priority and emphasis by addressing
            opportunities and barriers such as diverse learners needs, designing
            and implementing accommodative curriculum suited to the needs of
            children and responsive curriculum strategies in teaching and
            learning. The SEAMEO 7 Priority Areas; 1) Early Childhood Care and
            Education, 2) Addressing Barriers to Inclusion, 3) Resiliency in the
            Face of Emergencies, 4) Promoting Technical and Vocational Education
            and Training (TVET), 5) Revitalizing Teacher Education, 6) Promoting
            Harmonization and Higher Education and Research and 7) Adopting the
            21st Century Curriculum form the basis for this conference. The
            conference reflects the initiative of SEAMEO SEN to support the
            EDUCATION 2030 agenda that is committed to provide education for
            all.
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
          <Typography variant="h6">Target participants</Typography>
          <Typography variant="body1" className={classes.justifyText}>
            Teachers, educators, stakeholders, NGOs, Persons with Disabilities,
            parents, students, researchers, special education providers, policy
            makers, officials of Ministries of Education, Ministries of Health,
            Ministries of Social and Welfare and interested individuals.
          </Typography>
          <div className={classes.padBottom} />
          <span className={classes.padhref} id="msgDirector"></span>
          <Typography variant="h6">
            Message from The Director of SEAMEO SEN
          </Typography>
          <Typography variant="body1" className={classes.justifyText}>
            Dear presenters and participants of ICSE 2019
            <br />
            Greetings from SEAMEO SEN
            <br />
            Praise to the Al-Mighty through His blessing and grace, we are able
            to organize the 3rd International Conference on Special Education
            (ICSE) 2019. The ICSE 2019 proceeding is the third proceeding to be
            published and act as a continuation of the 2nd International
            Conference on Special Education Proceedings. The papers in this
            proceeding are evidence of research-based practices that will
            contribute to the building of knowledge and expertise of Special
            Education teachers in this region and beyond. SEAMEO SEN is
            committed to its vision and mission as a leading centre of
            excellence in Special Education in this region. This conference is a
            definitive effort and hard work by SEAMEO SEN to present
            opportunities and platforms for convergence of discussion and
            current ideas in Special Education to all its attendees. The papers
            published in this proceeding are papers that are written and
            documented based on the sub themes of the conference which are
            mainly focused on inclusive education, innovations in Special
            Education and also on best practices in all areas of Special
            Education. On behalf of the reviewing committee team ICSE 2019, I
            would like to extend my appreciative note to the presenters who have
            contributed to the papers in this proceeding. The papers explicated
            and documented are very valuable to all Special Education educators
            in this region and for all educators worldwide. With the publication
            of this proceeding the papers published will be used as reference
            and source of information for educators. I am also extending my
            utmost appreciation to the experts of the reviewing team, the
            technical writers and the whole team from SEAMEO SEN for the
            publication of this proceeding. Much effort, time and technical work
            have been invested to ensure the proceeding, will be published with
            standard and quality. I am sure our effort will be appreciated by
            the end users of this proceeding. I wish all the presenters and
            writers the best of luck in their future undertakings. Working
            within the Special Education field in the 21st century is indeed
            very challenging. The papers documented in this proceeding is the
            evidence of passion and love that we have for the betterment of our
            children with Special Education Needs. May all of us continue to
            work harder and become more resilient in our endeavour to champion
            the cause for our Special Children in this region. Together, we
            strive for excellence. Mdm. Hjh. Salmah binti Jopri Director SEAMEO
            Regional Centre For Special Education (SEAMEO SEN)
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
                            "/pdf/icse/2019/" + listOfPaper.paperId + ".pdf"
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
          <br />
        </Grid>
      </Grid>
    </>
  )
}

export default Proc2019
