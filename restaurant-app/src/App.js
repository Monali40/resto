
/*RestaurantsList
RestaurantDetail
RestaurantSearch
RestaurantCreate
RestaurantUpdate
make link for all Component
after create component use into type "rcc" it will create code inside for particular component 
make route for all Component

make a API (quicky)
Test it with postman
Fetch API Data
Show API data
after this above steps install bootsrap and react-bootstrap
add navbar
add table listing
 below is page header navbar bootstrap code

*/
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import{Navbar,Nav,Container} from 'react-bootstrap';

import Home from "./components/Home";
import RestaurantUpdate from "./components/RestaurantUpdate";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantsList from "./components/RestaurantsList";

function App() {
  return (
    <div className="App">
      <Router>
      
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Resto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/list">List</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/create">Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/search">Search</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/detail">Detail</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<RestaurantsList />} />
          <Route path="/create" element={<RestaurantCreate />} />
          <Route path="/search" element={<RestaurantSearch />} />
          <Route path="/detail" element={<RestaurantDetail />} />
          <Route path="/update" element={<RestaurantUpdate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

