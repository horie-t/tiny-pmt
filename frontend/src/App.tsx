import * as React from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import TicketsComponent from './components/TicketsComponent';
import axios from "axios";
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import TicketCreate from './components/TicketCreateComponent';
import { TicketsApi } from './infrastracture/restapi/TicketsApi';
import { Ticket } from './model/Ticket';

const ticketsApi = new TicketsApi();

export default function App() {
  const [tickets, setTickets] = React.useState<Ticket[]>([]);

  React.useEffect(() => {
    ticketsApi.list().then((tickets) => {setTickets(tickets)});
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
