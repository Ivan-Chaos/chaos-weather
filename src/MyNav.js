import { useState } from 'react';
import {Navbar, Container, Form, FormControl, Button} from 'react-bootstrap'
import { FcGlobe } from 'react-icons/fc';


const MyNav = () => {
    const [town, setTown]=useState('');
    
    
    const requestLocation=(address)=>{
        let geocodingUrl = new URL("http://api.openweathermap.org/geo/1.0/direct");
        //let params={key: "NCDLJUZnhamst8I0OaMxyC6dEr7SXpCP", location: address};
        let params = { appid: "3930567eb2335063d9d5d0f00c1d6fe8", q: address};
        geocodingUrl.search= new URLSearchParams(params).toString();
        
        fetch(geocodingUrl)
        .then(response => response.json())
        .then(data => console.log(data));
      
    }
    
    return (   
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">ChaosWeather <FcGlobe /></Navbar.Brand>
            <Navbar.Collapse className="me-auto justify-content-center">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                        value={town}
                        onChange={ (e) => setTown(e.target.value)}
                    />
                    <Button variant="outline-success" onClick={() => {requestLocation(town)}}>Search</Button>
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    );
}
 
export default MyNav;