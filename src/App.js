import './App.css';
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './MyNav'

const requestLocation=(address)=>{
  fetch('http://www.mapquestapi.com/geocoding/v1/address?key=8suf7hRMemfAQsghMd2GCUzCO9FOLCXG', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
    body: JSON.stringify({outFormat: "json", location: address})
    }
  ).then(response => response.json())
  .then(result => {
    console.table(result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
}

function App() {
  return (
      <>
        <MyNav />
        <Container>
          <Button variant="primary" onClick={()=>{requestLocation("Великий бичків")}}> ДЕ БИЧКІВ БЛЯТЬ НАХУЙ</Button>
        </Container>
      </>
  );
}

export default App;
