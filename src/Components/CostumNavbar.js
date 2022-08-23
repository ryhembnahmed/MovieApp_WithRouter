import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function CostumNavbar({ setCaracter, setRate }) {
  const handleChange = (e) => {
    setCaracter(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
          </Form>
          <Link to="/add">
          <button variant="primary" style={{ margin: "10px" }}>
            Add Movie
          </button>
        </Link>
        <Link to="/">
          <button variant="primary" style={{ margin: "10px" }}>
            Movie List
          </button>
        </Link>
        </Navbar.Collapse>
      </Container>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      ,
    </Navbar>
  );
}

export default CostumNavbar;
