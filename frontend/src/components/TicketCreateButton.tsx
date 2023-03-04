import { Add, Close } from "@mui/icons-material";
import { AppBar, Box, Button, Dialog, Fab, IconButton, Slide, TextField, Toolbar, Typography } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import axios from "axios";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TicketCreateButton = () => {
  // チケット作成ダイアログ
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // チケット・データ
  const [ticket, setTicket] = React.useState({
    title: "",
    description: ""
  });
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    axios.post("http://localhost:8080/tickets", ticket)
    .then(console.log);
    handleClose();
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <Add />
      </Fab>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              チケットを作成
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSubmit}>
              保存
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="タイトル"
            variant="standard"
            name="title"
            onChange={handleTextChange} />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="説明"
            multiline
            rows={4}
            name="description"
            defaultValue=""
            onChange={handleTextChange} />
        </Box>
      </Dialog>
    </div>
  );
};

export default TicketCreateButton;
