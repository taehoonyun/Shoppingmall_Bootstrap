import "./App.css";
import React from "react";
import axios from "axios";
import Home from "./components/Home";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

class App extends React.Component {
  state = {
    isLoading: true,
    items: [],
  };

  getItems = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    // console.log(data);
    this.setState({ isLoading: false, items: data });
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    const { isLoading, items } = this.state;
    return (
      <div>
        {isLoading ? (
          "loading..."
        ) : (
          <Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Tamazon</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Category
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Price
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Contact
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets">Sign in</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      Cart
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <CardGroup>
              <Row>
                {items.map((item) => {
                  return (
                    <Home
                      key={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      description={item.description}
                      category={item.category}
                      min={item.rating.rate}
                    />
                  );
                })}
              </Row>
            </CardGroup>
          </Container>
        )}
      </div>
    );
  }
}

export default App;
