import "../css/NoData.css";

const NoData = () => {
  return (
    <div className="empty-container">
      <span className="empty-decal">
        <span>:</span>
        <span>(</span>
      </span>
      <h2 className="empty-message">Nope, nothing!</h2>
    </div>
  );
};

export default NoData;
