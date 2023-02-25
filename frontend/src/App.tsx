import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Container } from '@mui/system';

function App() {
  return (
    <Container maxWidth="lg">
      <Typography sx={{mt: 4, mb: 2}} variant='h4' component='div'>TinyPDM</Typography>
      <List dense={false}>
        <ListItem key={1}>
          <ListItemText primary='最初のチケット' />
        </ListItem>
        <ListItem key={2}>
          <ListItemText primary='2番目のチケット' />
        </ListItem>
      </List>
    </Container>
  );
}

export default App;
