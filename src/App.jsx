export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(180deg,#09091f,#1b1035,#000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          border: "2px solid #ff4d94",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px #ff4d94",
        }}
      >
        <h1>❤️ Happy Birthday My Love ❤️</h1>

        <p>
          A Special Surprise
          <br />
          Is Waiting For You...
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "15px 30px",
            borderRadius: "30px",
            border: "none",
            background: "#ff4d94",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Open My Love 💖
        </button>
      </div>
    </div>
  );
}
