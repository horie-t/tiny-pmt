import React from "react";
import { List } from "@mui/material";
import TicketComponent from "./TicketComponent";

type TicketsComponentProps = {
  tickets: {title: string}[];
}

const TicketsComponent = ({tickets} : TicketsComponentProps) => {
  return (
    <List dense={false}>
      {tickets.map((ticket, i) => <TicketComponent ticket={ticket} key={i}/>)}
    </List>
  );
}

export default TicketsComponent;
