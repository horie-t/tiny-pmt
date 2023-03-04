import React from "react";
import { Fab, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TicketsComponent from "./components/TicketsComponent";
import axios from "axios";
import { Add } from "@mui/icons-material";

function App() {
  const [tickets, setTickets] = React.useState(null);

  React.useEffect(() => {
    axios.get("http://localhost:8080/tickets").then((response) => {
      setTickets(response.data.results);
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
        <Fab color="primary" aria-label="add" onClick={e => {
            axios.post("http://localhost:8080/tickets", {title: "新しいチケット", description: "何かする"})
            .then(console.log)
            .catch(console.log);
          }}>
          <Add  />
        </Fab>
    </Container>
  );
}

export default App;
