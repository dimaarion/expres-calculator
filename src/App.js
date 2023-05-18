import "./styles.css";
import Equal from "./Equal";
export default function App() {
  return (
    <div className="expres-calculator">
      <div className="entry ">
        <div className="row">
          <div className="col-sm">
            <input type="number" className="form-control" />
          </div>
          <div className="col-sm">
            <Equal />
          </div>
        </div>
      </div>
    </div>
  );
}
