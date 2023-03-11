import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AddCircle } from '@mui/icons-material';

export default function TicketCreate() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" startIcon={<AddCircle></AddCircle>} onClick={handleClickOpen}>
        チケットを作成
      </Button>
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <DialogTitle>チケット作成</DialogTitle>
        <DialogContent>
          <DialogContentText>
            チケットを作成します。
          </DialogContentText>
          <TextField required autoFocus margin="dense" id="title" type="text" fullWidth label="タイトル" variant="outlined" />
          <TextField  autoFocus margin="dense" id="title" type="text" fullWidth label="説明" variant="outlined" multiline rows={5}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleClose}>作成</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}