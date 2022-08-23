import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddFilm({ addMovie }) {
  const [film, setFilm] = useState({
    id: 15,
    title: "",
    description: "",
    rate: 0,
    poster: "",
  });
  const handleChange = (e) => {
    setFilm({
      ...film,
      id: Math.floor(Math.random() * 10000) + 1,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(film);
    setFilm({title:'', decription:'', rate:0, poster:'' })
  };

  return (
    <Form style={{ width: "50%", margin: "auto" }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie's title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
          value={film.title}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie's description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          onChange={handleChange}
          name="decription"
          value={film.decription}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie's rate</Form.Label>
        <Form.Control
          type="text"
          placeholder="Rate"
          onChange={handleChange}
          name="rate"
          value={film.rate}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Image"
          onChange={handleChange}
          name="poster"
          value={film.poster}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddFilm;
