import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import TicketsComponent from "./components/TicketsComponent";

const tickets = [
  {title: "最初のチケット"},
  {title: "2番目のチケット"},
  {title: "3番目のチケット"},
];

function App() {
  return (
    <Container maxWidth="lg">
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
        TinyPMT
      </Typography>
      <TicketsComponent tickets={tickets} />
    </Container>
  );
}

export default App;
