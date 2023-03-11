import * as React from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import TicketsComponent from './components/TicketsComponent';
import axios from "axios";
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { AddCircle } from '@mui/icons-material';
import TicketCreate from './components/TicketCreateComponent';

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
      <Typography variant='h5' sx={{m: 1}}>チケット作成</Typography>
      <Box sx={{ml: 2}}>
        <TicketCreate />
      </Box>
      <Typography variant='h5' sx={{mt: 1, ml: 1}}>チケット一覧</Typography>
      {tickets != null ? <TicketsComponent tickets={tickets} /> : "チケットがありません。"}
    </div>
  );
}
