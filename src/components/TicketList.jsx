const TicketList = ({ titulo, items, metrica }) => {
  return (
    <>
      <h2>{titulo}</h2>
      <div className="metrica">{metrica}</div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{index + 1}. {item}</li>
        ))}
      </ul>
    </>
  );
};
export default TicketList;