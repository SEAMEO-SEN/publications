import React from "react"
import Seo from "../../components/seo"
import data from "./data"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}))

const ResearchPage = () => {
  const classes = useStyles()

  return (
    <>
      <Seo
        title="SEAMEO SEN Research Paper"
        description="List of SEAMEO SEN Research Papers"
        author="SEAMEO SEN"
      />
      <Typography variant="h3" gutterBottom>
        SEAMEO SEN'S Research Paper List
      </Typography>
      <Typography component={"div"} variant="body1" gutterBottom>
        {data.papers.map((paper, i) => (
          <div key={i}>
            <List className={classes.root}>
              <ListItem
                component={Link}
                to={"/research/" + paper.id}
              >
                <ListItemText primary={paper.title} secondary={paper.authors} />
                <Button
                  component={Link}
                  to={"/research/" + paper.id}
                  activeStyle={{ color: "red" }}
                >
                  Read More
                </Button>
              </ListItem>
            </List>
            <Divider />
          </div>
        ))}
      </Typography>
    </>
  )
}

export default ResearchPage
