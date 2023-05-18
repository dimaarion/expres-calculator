import { useEffect, useState } from "react";
import "./styles.css";
import Equal from "./Equal";
import Squaremeter from "./Squaremeter";
import Result from "./Result";
export default function App() {
  const [result, setResult] = useState(1);

  function calculate(num) {
    let expresCalculator = document.getElementById("expresCalculator");
    let number = expresCalculator.getAttribute("data-num");
    if (number) {
      number = Number.parseInt(number);
    } else {
      number = 15;
    }

    return setResult(num * number);
  }
  return (
    <div className="expres-calculator container-fluid">
      <div className="entry ">
        <div className="row">
          <div className="col text-left" style={{ fontSize: "30pt" }}>
            Введите квадратные метры окна
          </div>
          <div className="col-3 position-relative">
            <div className="enact">
              <input
                onChange={(e) => calculate(e.target.value)}
                type="text"
                defaultValue={1}
                className="form-control"
                min="1"
                max="10"
              />
              <Squaremeter />
            </div>
          </div>
          <div className="col-1 text-center">
            <Equal />
          </div>
          <div className="col-1 position-relative">
            <div className="position-absolute result">
              <Result result={result} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
