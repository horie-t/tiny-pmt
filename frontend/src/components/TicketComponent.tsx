import React from "react";
import { ListItem, ListItemText } from "@mui/material";

type Ticket = {
  title: string;
}

const TicketComponent = ({ title }: Ticket) => {
  return (
    <ListItem>
      <ListItemText primary={title} />
    </ListItem>
  );
}

export default TicketComponent;
