
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
 const [finalSurprise, setFinalSurprise] = useState(false);
  const [surprise, setSurprise] = useState(false);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#09091f,#2b0038)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "sans-serif",
        overflow: "hidden",
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
          width: "80%",
        }}
      >
        {!open && (
  <>
    <h1>❤️ Happy Birthday My Love ❤️</h1>

    <p>
      A Special Surprise
      <br />
      Is Waiting For You...
    </p>

    <button
      onClick={() => setOpen(true)}
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
  </>
)}
        {open && !showSurprise && (
  <div
            style={{
              marginTop: "25px",
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            💕 My Love,
            <br />
            You are the most important person in my lif❤️
            <br />
            Thank you for making my world beautiful ❤️
            <button
  onClick={() => setShowSurprise(true)}
  style={{
    marginTop: "20px",
    padding: "12px 25px",
    borderRadius: "25px",
    border: "none",
    background: "#ff4d94",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  }}
>
  One More Surprise 🎁
</button>
 {showSurprise && (
  <div
    style={{
      marginTop: "25px",
      padding: "25px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.12)",
      boxShadow: "0 0 20px #ff4d94",
    }}
  >
    <h2>🌹 Happy Birthday My Jaanu 🌹</h2>

    <p>
      ❤️ My Pasandida Aurat ❤️
      <br /><br />
      Tum meri life ka sabse beautiful part ho.
      <br />
      Tumhari smile meri duniya ko special banati hai.
      <br /><br />
      Happy Birthday My Love 🎂💖
      <br /><br />
      <b>Next Surprise 🎁</b>
    </p>
  </div>
)}
