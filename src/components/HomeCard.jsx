function HomeCard({ titulo, descripcion, onClick }) {
  return (
    <button className="home-card" type="button" onClick={onClick}>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </button>
  );
}

export default HomeCard;