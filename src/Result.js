import React from "react"
import Dollar from "./Dollar";

export default function Result(props) {
  return (
    <div>
          = {Math.round(props.result)} <span className="currency"><Dollar /></span>
    </div>
  );
}
