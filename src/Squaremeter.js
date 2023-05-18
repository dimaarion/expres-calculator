export default function Squaremeter() {
  return (
    <div className="position-absolute meter">
      <svg width="70" height="66">
        <text
          x="0"
          y="45"
          fill="#000"
          style={{ fontSize: "25pt", fontWeight: "bold" }}
        >
          M
        </text>
        <text
          x="32"
          y="45"
          fill="#000"
          style={{ fontSize: "25pt", fontWeight: "bold" }}
        >
          2
        </text>
      </svg>
    </div>
  );
}
