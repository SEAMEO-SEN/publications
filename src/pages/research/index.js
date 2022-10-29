import React from "react"
import Seo from "../../components/seo"
import data from "./data"
import { Link } from "gatsby"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const ResearchPage = () => {
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
            <List>
              <ListItem component={Link}
                to={"/research/" + paper.id}
                activeStyle={{ color: "red" }}>
                <ListItemAvatar>
                  <Avatar>
                    <ReadMoreIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={paper.title} secondary={paper.authors} />
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
