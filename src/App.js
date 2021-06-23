import './App.css';
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './MyNav'

const requestLocation=(address)=>{
  let geocodingUrl = new URL("http://www.mapquestapi.com/geocoding/v1/address");
  let params={key: "NCDLJUZnhamst8I0OaMxyC6dEr7SXpCP", location: address};
  geocodingUrl.search= new URLSearchParams(params).toString();
  
  fetch(geocodingUrl)
  .then(response => response.json())
  .then(data => console.log(data));
  
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
