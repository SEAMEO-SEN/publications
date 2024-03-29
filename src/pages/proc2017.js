import React from "react"
import Seo from "../components/seo"
import Typography from "@mui/material/Typography"
import data from "./icseproc2017/data"
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

const Proc2017 = () => {
  const classes = useStyles()

  return (
    <>
      <Seo
        title="2nd International Conference for Special Education 2017 (ICSE 2017)"
        description="2nd International Conference for Special Education 2017 (ICSE 2017) by SEAMEO SEN, Theme: Access and Engagement, ISBN: 978-967-15154-0-2"
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
          <Typography variant="h6">Proceeding Committee ICSE 2017:</Typography>
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
            The 2nd International Conference on Special Education is the second
            to be held in the SEA region after the 1st ICSE 2015 that was
            jointly organized with the Ministry of Education Thailand. The
            International Conference on Special Education is one of the main
            agenda that SEAMEO SEN is committed to organize biennially. The
            success of the 1st ICSE 2015 has impacted significantly on the role
            of SEAMEO SEN as the regional center for training and research in
            Special Education. The main focus of the conference would be on
            developing special competencies of educators of SEN children with
            disabilities that are trending and concurrent with the Global
            Education Agenda. The conference not only would develop the
            knowledge and skills of the participants, presenters and speakers as
            it is an opportunity for understanding and developing the methods,
            the philosophical tenets that are the hall mark of professionalism
            in Special Education. The main outcome will be on the capacity of
            participants and those involved with Special Education to deliver
            optimal education of children with disabilities in all aspects;
            policy, administration, teacher training, financial strength and
            support, implementation and quality educational delivery and
            instruction as well communities and support from government and
            non-government bodies.
          </Typography>
          <div className={classes.padBottom} />
          <span className={classes.padhref} id="theme"></span>
          <Typography variant="h6">Theme</Typography>
          <Typography variant="body1" gutterBottom>
            The 2nd ICSE 2017 theme is Access and Engagement in Special
            Education and is presented together with 23 subthemes
          </Typography>
          <Typography component={"div"} variant="body1" gutterBottom>
            <ul>
              {data.listOfSubTheme.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Typography>
          <Typography variant="body1" className={classes.justifyText}>
            Addressing access must be given priority and emphasis by addressing
            opportunities and barriers such as diverse learners‟ needs,
            designing and implementing accommodative curriculum suited to the
            needs of children and responsive curriculum strategies in teaching
            and learning. The SEAMEO 7 Priority Areas; 1) Early Childhood Care
            and Education, 2) Addressing Barriers to Inclusion, 3) Resiliency in
            the Face of Emergencies, 4) Promoting Technical and Vocational
            Education and Training (TVET), 5) Revitalising Teacher Education, 6)
            Promoting Harmonisation and Higher Education and Research and 7)
            Adopting the 21st Century Curriculum form the basis for this
            conference. The conference reflects the initiative of SEAMEO SEN to
            support the EDUCATION 2030 agenda that is committed to provide
            education for all.
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
            parents, students, researchers, Special education providers, policy
            makers, officials of Ministries of Education. Ministries of Health,
            Ministries of Social and Welfare and interested individuals.
          </Typography>
          <div className={classes.padBottom} />
          <span className={classes.padhref} id="msgDirector"></span>
          <Typography variant="h6">
            Message from The Director of SEAMEO SEN
          </Typography>
          <Typography variant="body1" className={classes.justifyText}>
            Dear presenters of ICSE 2017
            <br />
            Greetings from SEAMEO SEN
            <br />
            Alhamdullilah we are able to organize the 2nd International
            Conference on Special Education 2017 and published this proceeding.
            The ICSE 2017 proceeding is the second proceeding to be published
            after the ICSE 2015 proceeding that was jointly published with the
            Ministry of Education Thailand. The ICSE 2017 is a continuation of
            the 2nd International Conference on Special Education that is held
            this year in Borneo Convention Center in Kuching Sarawak, Malaysia.
            The papers in this proceeding are evidence of research based
            practices that will contribute to the building of knowledge and
            expertise of Special Education teachers in this region and beyond.
            SEAMEO SEN is committed to its vision and mission as a leading
            center of excellence in Special Education in this region. This
            conference is a definitive effort and hard work by SEAMEO SEN to
            present opportunities and platforms for convergence of discussion
            and current ideas in Special Education to all its attendees. The
            papers published in this proceeding are papers that are written and
            documented based on the sub themes of the conference which are
            mainly focused on inclusive education, innovations in Special
            Education and also on best practices in all areas of Special
            Education. On behalf of the reviewing committee team ICSE 2017, I
            would like to extend my appreciative note to the presenters who have
            contributed to the papers in this proceeding. The papers explicated
            and documented are very valuable to all Special Education educators
            in this region and for all educators worldwide. With the publication
            of this proceeding the papers published will be used as reference
            and source of information for educators. I am also extending my
            utmost appreciation to the experts of the reviewing team, the
            technical writers and the whole team from SEAMEO SEN for the
            publication of this proceeding. Much effort, time and technical work
            have been invested to ensure the proceeding will be published with
            standard and quality. I am sure our effort will be appreciated by
            the end users of this proceeding. I wish all the presenters and
            writers the best of luck in their future undertakings. Working
            within the Special Education field in the 21st century is indeed
            very challenging. The papers documented in this proceeding is the
            evidence of passion and love that we have for the betterment of our
            children with Special Education Needs. May all of us continue to
            work harder and become more resilient in our endeavor to champion
            the cause for our Special Children in this region. Together, we
            strive for excellence. Datin Dr. Hjh. Yasmin Hussain Director SEAMEO
            Regional Center For Special Education ( SEAMEO SEN )
          </Typography>
          <div className={classes.padBottom} />
          <span className={classes.padhref} id="listOfPaper"></span>
          <Typography variant="h6">List of Full Paper:</Typography>
          <div className={classes.padBottom}></div>
          <Typography component={"div"} variant="body1" gutterBottom>
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
                            "/pdf/icse/2017/" + listOfPaper.paperId + ".pdf"
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

export default Proc2017
