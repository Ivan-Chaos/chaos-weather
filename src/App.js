import './App.css';
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './MyNav'
import { useState } from 'react';


function App() {
  const [town, setTown]=useState('');
  
  return (
      <>
        <MyNav town={town} setTown={setTown}/>
        <Container>
          <p> {town} </p>
        </Container>
      </>
  );
}

export default App;
