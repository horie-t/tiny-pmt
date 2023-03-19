import React from "react";
import { List } from "@mui/material";
import TicketComponent from "./TicketComponent";
import { Ticket } from "../model/Ticket";

type TicketsComponentProps = {
  tickets: Ticket[];
}

const TicketsComponent = ({tickets} : TicketsComponentProps) => {
  return (
    <List dense={false}>
      {tickets.map((ticket, i) => <TicketComponent ticket={ticket} key={i}/>)}
    </List>
  );
}

export default TicketsComponent;