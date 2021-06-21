import './App.css';
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './MyNav'

const requestLocation=(address)=>{

  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key:"8suf7hRMemfAQsghMd2GCUzCO9FOLCXG", outFormat: "json", location:"New York" })
  };
  fetch('http://www.mapquestapi.com/geocoding/v1/address', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  
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
