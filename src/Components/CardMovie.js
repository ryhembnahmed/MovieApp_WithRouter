import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

function CardMovie({ movie }) {
  const navigate= useNavigate();
  const handleClick = () => {
    navigate(`/description/${movie.id}`)
   };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.poster} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.decription}</Card.Text>
        <Button variant="light">
          <ReactStars
            edit={false}
            count={5}
            size={24}
            activeColor="#ffd700"
            value={movie.rate}
          />
        </Button>
        <p>
            <Button
              variant="primary"
              style={{ margin: "10px" }}
              onClick={handleClick}
            >
              Description
            </Button>
          <a href={movie.trailer} target="_blank">
            <Button variant="primary" style={{ margin: "10px" }}>
              Trailer
            </Button>
          </a>
        </p>
      </Card.Body>
    </Card>
  );
}

export default CardMovie;
