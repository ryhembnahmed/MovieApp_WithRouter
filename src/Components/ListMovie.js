import CardMovie from "./CardMovie";

function ListMovie({ films, caracter, rate }) {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        width: "1000px",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {films
        .filter(
          (elt) =>
            elt.title.toUpperCase().includes(caracter.toUpperCase()) &&
            elt.rate >= rate
        )
        .map((elt) => (
          <CardMovie key={elt.id} movie={elt} />
        ))}
    </div>
  );
}

export default ListMovie;
