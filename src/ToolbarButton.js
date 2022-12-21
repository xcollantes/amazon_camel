import { BugReport, GitHub, InsertChart, Quiz } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardContent, CardHeader, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SpeedDialIcon, Typography } from "@mui/material";

import { Box } from "@mui/system";
import "./ToolbarButton.css";

export default function ToolbarButton() {
  const listItems = [
    { text: "See CamelCamelCamel.com", target: "https://camelcamelcamel.com", icon: <InsertChart /> },
    { text: "Report bug", target: "https://bit.ly/report-issue-amazon-camel", icon: <BugReport /> },
    { text: "Request feature", target: "https://bit.ly/request-feature-amazon-camel", icon: <Quiz /> },
    { text: "See code", target: "https://github.com/xcollantes/amazon_camel", icon: <GitHub /> },
  ];

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ mt: "0.5em" }}>
            Amazon Price History Tracker
          </Typography>
          <Typography variant="body1">
            A graph will appear scroll down any Amazon product page
          </Typography>
          <Button variant="contained">Show me</Button>
        </CardContent>
      </Card>
      <Box sx={{ width: "80vw", bgcolor: "background.paper" }}>
        <nav aria-label="actions">
          <List dense>
            {listItems.map(item =>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </nav>
      </Box>
    </>
  );
}
