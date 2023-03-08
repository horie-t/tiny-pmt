import * as React from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import TicketsComponent from './components/TicketsComponent';
import axios from "axios";

export default function App() {
  const [tickets, setTickets] = React.useState(null);

  React.useEffect(() => {
    axios.get("http://localhost:8080/tickets").then((response) => {
      setTickets(response.data.results);
    });
  }, []);

  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      {tickets != null ? <TicketsComponent tickets={tickets} /> : ""}
    </div>
  );
}
