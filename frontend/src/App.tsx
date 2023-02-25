import React from "react";
import { List, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TicketComponent from "./components/TicketComponent";

const tickets: {title: string}[] = [
  {title: "最初のチケット"},
  {title: "2番目のチケット"},
  {title: "3番目のチケット"},
];

function App() {
  return (
    <Container maxWidth="lg">
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
        TinyPDM
      </Typography>
      <List dense={false}>
        {tickets.map((ticket, i) => 
          <TicketComponent title={ticket.title} />
        )}
      </List>      
    </Container>
  );
}

export default App;
