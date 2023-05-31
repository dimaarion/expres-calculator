import { useEffect, useState } from "react";
import "./styles.css";
import Equal from "./Equal";
import Squaremeter from "./Squaremeter";
import Result from "./Result";
export default function App() {
  let numDefault = 193.4;
  const [result, setResult] = useState(numDefault);
  const [lang, setLang] = useState("ro");
  const [inputControl, setInputControl] = useState(1);
  function calculate(num) {
    if (Number.parseFloat(num)) {
      console.log(Number.parseFloat(num))
    }
if(num.match(/[0-9\.]+/)){
  num = num.match(/[0-9\.]+/g)[0]
}else{
  num = 0;
}
      setInputControl(num);
      setResult(Number.parseFloat(num) * numDefault);

  
  }

  const styles = {
    fs: { fontSize: "30pt" },
    mlMd: { left: "50px" },
    mlRu: { left: "35px" },
  }

  useEffect(() => {
    setLang(document.querySelector("html").lang)
  }, [document.querySelector("html").lang])
  return (
    <div className="expres-calculator container-fluid">

      <div className="entry ">
        <div className="row">
          <div className="col-sm title" style={styles.fs}>
            {lang === "ro" ? "Suprafața ferestrei" : "Площадь окна"}
          </div>
          <div className="col-sm position-relative">
            <div className="enact ">
              <input
                onChange={(e) => calculate(e.target.value)}
                type="text"
                pattern="[0-9]{5}"
                className="form-control"
                maxLength="5"
              
                value={inputControl?inputControl:""}
              />
              <Squaremeter />


            </div>
            <div className="equal" style={styles.fs}>
              <Result result={result} />
            </div>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
      <div className="description">{lang === "ro" ? "Sunați acum și obțineți cea mai avantajoasă ofertă în Moldova!" : "Звоните прямо сейчас и получите самое выгодное предложение в Молдове!"}</div>
      <div className="redirect-calculator" ><a style={lang === "ro" ? styles.mlMd : styles.mlRu} href={lang === "ro" ? "https://sandaniprim.md/calculator" : "https://sandaniprim.md/ru/calculator"}>{lang === "ro" ? "Calculul detaliat " : "Детальный расчет"}</a></div>
    </div>
  );
}
