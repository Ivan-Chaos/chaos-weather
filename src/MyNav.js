import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'

const MyNav = () => {
    return (   
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">ChaosWeather</Navbar.Brand>
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