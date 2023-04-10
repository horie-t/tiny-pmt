import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AddCircle } from '@mui/icons-material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import axios from 'axios';
import { Ticket } from '../model/Ticket';
import { TicketsApi } from '../infrastracture/restapi/TicketsApi';

const ticketsApi = new TicketsApi();

export default function TicketCreate() {
  const { control, handleSubmit, reset } = useForm<Ticket>();
  const onSubmit: SubmitHandler<Ticket> = (ticket) => {
    ticketsApi.create(ticket).then(ticket => {
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

  return (
    <div>
      <Button variant="contained" startIcon={<AddCircle></AddCircle>} onClick={handleClickOpen}>
        チケットを作成
      </Button>
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>チケット作成</DialogTitle>
          <DialogContent>
            <DialogContentText>
              チケットを作成します。
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
            <Button type='submit'>作成</Button>
          </DialogActions>
        </Stack>
      </Dialog>
    </div>
  );
}