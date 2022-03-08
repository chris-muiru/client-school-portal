import "../css/MainPage/unit.css";
const Unit = ({ unitDetail, children }) => {
  let choice = ["orangered", "rgb(98, 17, 173)", "green", "red"];
  let backgroundColor = choice[Math.floor(Math.random() * choice.length)];

  return (
    <div className="div-unit" style={{ backgroundColor }}>
      {/*from django database*/}
      <h4>{unitDetail}</h4>
      <p>{children}</p>
    </div>
  );
};

export default Unit;
