import * as React from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import TicketsComponent from './components/TicketsComponent';

const tickets = [
  {title: "最初のチケット"},
  {title: "2番目のチケット"},
  {title: "3番目のチケット"},
];

export default function App() {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <TicketsComponent tickets={tickets} />
    </div>
  );
}
