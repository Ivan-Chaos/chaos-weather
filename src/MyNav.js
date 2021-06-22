import {Navbar, Container, Form, FormControl, Button} from 'react-bootstrap'
import { FcGlobe } from 'react-icons/fc';


const MyNav = () => {
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
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    );
}
 
export default MyNav;