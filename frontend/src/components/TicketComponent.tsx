import React from "react";
import { IconButton, ListItem, ListItemButton, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

type TicketComponentProps = {
  ticket: {
    id: string,
    title: string,
  }
}

const TicketComponent = ({ ticket }: TicketComponentProps) => {
  const handleDeleteClick = () => {
    axios.delete(`http://localhost:8080/tickets/${ticket.id}`).then(response => {
      console.log("Delete success.");
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <ListItem disablePadding>
      <ListItemButton sx={{pl: 2, pt: 0, pr: 2, pb: 0}}>
        <ListItemText primary={ticket.title} />
      </ListItemButton>
      <IconButton aria-label="delete" size="small" onClick={handleDeleteClick}>
        <DeleteIcon fontSize="small"/>
      </IconButton>
    </ListItem>
  );
}

export default TicketComponent;