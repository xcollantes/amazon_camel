import { useState } from "react";
import { BugReport, GitHub, InsertChart, Quiz } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import "./ToolbarButton.css";

export default function ToolbarButton() {
  const [noGraph, setNoGraph] = useState(false);
  const [noGraphMessage, setNoGraphMessage] = useState();

  const cheekyErrors = [
    "except this page - this page doesn't have a graph",
    "try again, no graph here",
    "just kidding, this page doesn't have a graph",
    "okay not this page though - no graph here",
    "oops, no graph found here",
    "wah-wah, no graph here",
    <img src="https://i.imgflip.com/7561fu.jpg" width="100px" alt="meme" />,
  ];

  const listItems = [
    {
      text: "See CamelCamelCamel.com",
      target: "https://camelcamelcamel.com",
      icon: <InsertChart />,
    },
  ];

  function handleButtonShowMe() {
    window.chrome.tabs
      .query({ active: true, lastFocusedWindow: true })
      .then((tab) => {
        console.log("TAB " + tab[0].id);
        window.chrome.tabs.sendMessage(tab[0].id, "show_graph", (response) => {
          if (response === "no_graph_found") {
            setNoGraph(true);
            setNoGraphMessage(
              cheekyErrors[
                Math.floor((Math.random() * 10) % cheekyErrors.length)
              ]
            );
          }
        });
      });
  }

  return (
    <>
      <Card sx={{ mb: "1em" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Amazon Price History
          </Typography>
          <Typography variant="body1">
            Scroll down any Amazon product page for graph
          </Typography>
          <Box>
            {noGraph && (
              <Typography variant="body1" color="error">
                ... {noGraphMessage}
              </Typography>
            )}
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={() => handleButtonShowMe()}>
            Show me
          </Button>
        </CardActions>
      </Card>
      <Box sx={{ bgcolor: "background.paper" }}>
        <nav aria-label="actions">
          <List dense>
            {listItems.map((item) => (
              <Link href={item.target} target="_blank">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </nav>
      </Box>
    </>
  );
}
