import React, { useReducer } from "react";
import { AppBar, Box, Button, Dialog, Divider, Fab, IconButton, List, ListItem, ListItemText, Slide, TextField, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TicketsComponent from "./components/TicketsComponent";
import axios from "axios";
import { Add, Close } from "@mui/icons-material";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  // チケットの表示
  const [tickets, setTickets] = React.useState(null);
  React.useEffect(() => {
    axios.get("http://localhost:8080/tickets").then((response) => {
      setTickets(response.data.results);
    });
  }, []);

  // チケット作成ダイアログ
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
        TinyPMT
      </Typography>
      {(() =>  {
        if (tickets != null) {
          return <TicketsComponent tickets={tickets} />;}
        else { 
          return "";
        }})()
      }
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <Add  />
      </Fab>
      <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
        <AppBar sx={{ position: 'relative' }}>
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
            <Button autoFocus color="inherit" onClick={handleClose}>
              保存
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="タイトル" variant="standard" onChange={(event) => null}/><br />
          <TextField
            id="outlined-multiline-static"
            label="説明"
            multiline
            rows={4}
            defaultValue=""
            onChange={() => null}
          />
        </Box>
      </Dialog>
    </Container>
  );
}

export default App;
