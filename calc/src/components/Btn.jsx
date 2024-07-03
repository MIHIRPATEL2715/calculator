import "./general.css";
function Btn({ latter }) {
  return latter.map((lat) => (
    <button type="button" className="btn">
      {lat}
    </button>
  ));
}
export default Btn;
