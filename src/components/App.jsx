import { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="app">

      {page === 0 && (
        <div className="card">
          <h1>❤️ Happy Birthday ❤️</h1>
          <h2>Meri Pasandida Aurat 🌹</h2>

          <p>
            Ek chhota sa surprise sirf aapke liye...
          </p>

          <button onClick={() => setPage(1)}>
            Open My Love ❤️
          </button>
        </div>
      )}

      {page === 1 && (
        <div className="card">
          <h1>💌 My Love Letter</h1>

          <p>
            Meri Jaan... ❤️
            <br /><br />

            Tum meri zindagi ki sabse khoobsurat
            wajah ho.

            <br /><br />

            Tumhari muskaan meri duniya roshan
            kar deti hai.

            <br /><br />

            Happy Birthday Madam Ji 🎂💕
          </p>

          <button onClick={() => setPage(2)}>
            Next Surprise 🎁
          </button>
        </div>
      )}

      {page === 2 && (
        <div className="card">
          <h1>🎁 Surprise</h1>

          <div className="gift">
            🎁
          </div>

          <button onClick={() => setPage(3)}>
            Open Gift 💝
          </button>
        </div>
      )}

      {page === 3 && (
        <div className="card">
          <h1>🎂 Happy Birthday Jaanu ❤️</h1>

          <p>
            Hamesha khush raho...

            <br /><br />

            Main hamesha tumhare saath hoon.

            <br /><br />

            ❤️ I Love You Forever ❤️
          </p>
        </div>
      )}

    </div>
  );
}
