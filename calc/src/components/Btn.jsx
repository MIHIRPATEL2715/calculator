import "./general.css";
function Btn({ latter, handleonclick }) {
  return latter.map((lat) => (
    <button type="button" className="btn" onClick={() => handleonclick(lat)}>
      {lat}
    </button>
  ));
}
export default Btn;
