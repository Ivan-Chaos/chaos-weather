import './App.css';
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './MyNav'

const requestLocation=(address)=>{
  let geocodingUrl = new URL("http://api.openweathermap.org/geo/1.0/direct");
  //let params={key: "NCDLJUZnhamst8I0OaMxyC6dEr7SXpCP", location: address};
  let params = { appid: "3930567eb2335063d9d5d0f00c1d6fe8", q: address};
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
        </Container>
      </>
  );
}

export default App;
