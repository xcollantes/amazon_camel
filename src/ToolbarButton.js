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
  Typography
} from "@mui/material";

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
      <Card sx={{ mb: "1em" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Amazon Price History
          </Typography>
          <Typography variant="body1">
            Scroll down any Amazon product page for graph
          </Typography>
        </CardContent>
        <CardActions>
          <Link href="https://www.amazon.com/Images-SI-Uranium-Ore/dp/B000796XXM#price-tracker" target="_blank">
            <Button variant="contained">Show example</Button>
          </Link>
        </CardActions>
      </Card>
      <Box sx={{ bgcolor: "background.paper" }}>
        <nav aria-label="actions">
          <List dense>
            {listItems.map(item =>
              <Link href={item.target} target="_blank">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            )}
          </List>
        </nav>
      </Box>
    </>
  );
}
