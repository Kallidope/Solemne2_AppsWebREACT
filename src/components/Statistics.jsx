const Statistics = () => {
  return (
    <div className="stats-container">
      <h2>ESTATUS</h2>
      <div className="donut-chart">
        <div className="chart-circle"></div>
      </div>
      <div className="legend">
        <p>● Resueltos: 1,000</p>
        <p>● Abiertos: 2,000</p>
        <p>● Pendientes: 2,000</p>
      </div>
    </div>
  );
};
export default Statistics;