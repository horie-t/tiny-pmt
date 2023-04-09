import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, ListItem, ListItemButton, ListItemText, Stack, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Ticket } from "../model/Ticket";
import { TicketsApi } from "../infrastracture/restapi/TicketsApi";

const ticketsApi = new TicketsApi();

type TicketComponentProps = {
  ticket: Ticket
}

const TicketComponent = ({ ticket }: TicketComponentProps) => {
  // チケット更新
  const { control, handleSubmit, reset } = useForm<Ticket>({
    defaultValues: ticket
  });
  const onSubmit: SubmitHandler<Ticket> = (ticket) => {
    ticketsApi.replase(ticket).then((ticket) => {
      console.log(ticket);
    }).catch(error => {
      console.log(error);
    });
    handleClose();
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    reset();
    setOpen(false);
  };
  
  // チケット削除
  const handleDeleteClick = () => {
    ticketsApi.delete(ticket).then(() => {
      console.log("Delete success.");
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <ListItem disablePadding>
      <ListItemButton sx={{pl: 2, pt: 0, pr: 2, pb: 0}} onClick={handleClickOpen}>
        <ListItemText primary={ticket.title} />
      </ListItemButton>
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>チケット</DialogTitle>
          <DialogContent>
            <DialogContentText>
              チケット情報
            </DialogContentText>
            <Controller name="title" control={control} render={({ field }) => 
             <TextField required autoFocus margin="dense" id="title" type="text" fullWidth 
              label="タイトル" variant="outlined" {...field} />} />
            <Controller name="description" control={control} render={({field}) => 
            <TextField  autoFocus margin="dense" id="title" type="text" fullWidth 
              label="説明" variant="outlined" multiline rows={5} {...field}/>} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>キャンセル</Button>
            <Button type='submit'>更新</Button>
          </DialogActions>
        </Stack>
      </Dialog>
      <IconButton aria-label="delete" size="small" onClick={handleDeleteClick}>
        <DeleteIcon fontSize="small"/>
      </IconButton>
    </ListItem>
  );
}

export default TicketComponent;