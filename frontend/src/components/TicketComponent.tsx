import React from "react";
import { ListItem, ListItemText } from "@mui/material";

type TicketComponentProps = {
  ticket: {title: string}
}

const TicketComponent = ({ ticket }: TicketComponentProps) => {
  return (
    <ListItem sx={{pl: 2, pt: 0, pb: 0, pr: 2}}>
      <ListItemText primary={ticket.title} />
    </ListItem>
  );
}

export default TicketComponent;