import React from "react";
import { ListItem, ListItemText } from "@mui/material";

type TicketComponentProps = {
  ticket: {title: string}
}

const TicketComponent = ({ ticket }: TicketComponentProps) => {
  return (
    <ListItem>
      <ListItemText primary={ticket.title} />
    </ListItem>
  );
}

export default TicketComponent;
