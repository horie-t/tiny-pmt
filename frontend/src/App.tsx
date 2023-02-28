import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import TicketsComponent from "./components/TicketsComponent";
import axios from "axios";

function App() {
  const [tickets, setTickets] = React.useState(null);

  React.useEffect(() => {
    axios.get("http://localhost:8080/tickets").then((response) => {
      setTickets(response.data);
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
        TinyPMT
      </Typography>
      {(() =>  {
        if (tickets != null) {
          return <TicketsComponent tickets={tickets} />;}
        else { 
          return "";
        }})()}
    </Container>
  );
}

export default App;
