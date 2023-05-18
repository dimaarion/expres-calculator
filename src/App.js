import "./styles.css";
import Equal from "./Equal";
export default function App() {
  return (
    <div className="expres-calculator">
      <div className="entry ">
        <div className="row">
          <div className="col enact">
            <input type="number" className="form-control" min="1" max="10" />
          </div>
          <div className="col text-center">
            <Equal />
          </div>
          <div className="col p-0 position-relative">
            <div className="position-absolute result">0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
