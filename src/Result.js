export default function Result(props) {
  return (
    <div>
      <svg width="100" height="66">
        <text
          x="0"
          y="50"
          fill="#000"
          style={{ fontSize: "40pt", fontWeight: "bold" }}
        >
          {props.result}
        </text>
      </svg>
    </div>
  );
}
