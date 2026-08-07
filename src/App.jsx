import { useState, useEffect, useRef } from "react";
import "./App.css";
 import girl2 from "./assets/girl2.jpg";
 import memory1 from "./assets/memory/memory1.jpg";
import memory2 from "./assets/memory/memory2.jpg";
import memory3 from "./assets/memory/memory3.jpg";
import memory4 from "./assets/memory/memory4.jpg";
import memory5 from "./assets/memory/memory5.jpg";
 import song from "./assets/love.mp3";

export default function App() {
 const [page, setPage] = useState(0);
 const audioRef = useRef(null);
const [showPhoto, setShowPhoto] = useState(false);
 const [musicPlay, setMusicPlay] = useState(false);
const [memoryIndex, setMemoryIndex] = useState(0);
 const [age, setAge] = useState({
  years: 0,
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});
 const memories = [
  memory1,
  memory2,
  memory3,
  memory4,
  memory5
];
  useEffect(() => {
  if(page === 3){
    setTimeout(()=>{
      setShowPhoto(true);
    },1500);
  }
},[page]);
 useEffect(() => {
  const birthday = new Date("2009-08-11T00:00:00");

  const updateAge = () => {
    const now = new Date();
    const diff = now - birthday;

    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(diff / (1000 * 60));
    const totalHours = Math.floor(diff / (1000 * 60 * 60));
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    let years = now.getFullYear() - birthday.getFullYear();
let months = now.getMonth() - birthday.getMonth();
let days = now.getDate() - birthday.getDate();

if (days < 0) {
  months--;

  const previousMonth = new Date(
    now.getFullYear(),
    now.getMonth(),
    0
  );

  days += previousMonth.getDate();
}

if (months < 0) {
  years--;
  months += 12;
}

    setAge({
      years,
      months,
      days: totalDays,
      hours: totalHours,
      minutes: totalMinutes,
      seconds: totalSeconds,
    });
  };

  updateAge();
  const timer = setInterval(updateAge, 1000);

  return () => clearInterval(timer);
}, []);
  return (
  <div className="app">

  <audio
  id="mySong"
  src={song}
  autoPlay
  loop
/>

<button
  className="music-btn"
  onClick={() => {
    document.getElementById("mySong").play();
  }}
>
  🎵 Play Our Song ❤️
</button>

    <div className="bg-hearts">
  <span>❤️</span>
  <span>💕</span>
  <span>💖</span>
  <span>💗</span>
  <span>💞</span>
  <span>💘</span>
  <span>💝</span>
  <span>🌹</span>
</div>
      {page === 0 && (
        <div className="card">
          <h1>❤️ Happy Birthday ❤️</h1>
          <h2>🌹 Meri Pasandida Aurat 🌹</h2>

          <p>
            Aaj ka din sirf aapke naam...
            <br />
            Maine aapke liye ek chhota sa surprise banaya hai. ❤️
          </p>

          <button onClick={() => setPage(1)}>
            Open My Love ❤️
          </button>
        </div>
      )}

      {page === 1 && (
        <div className="card">
          <h1>💌 Meri Jaan</h1>

         <p>
  Tumhari tarif me kya kahu madam ji ❤️
  <br /><br />
  Meri murjhai hui zindagi mein gulab ho tum 🌹
  <br /><br />
  I Love You Puchki 😚🫀
</p>

           
        <button onClick={() => setPage(2)}>
          Next Surprise 🎁
          </button>
        </div>
      )}
           {page === 2 && (
        <div className="card">
          <h1>🎁 Surprise Gift 🎁</h1>

          <div
  className="gift-box"
  onClick={() => setPage(3)}
>
  🎁
</div>

          <p>Gift ko touch karo... ❤️</p>
        </div>
      )}

      {page === 3 && (
  <div className="card">
  <div className="stars">
  ✨ ⭐ ✨ ⭐ ✨
</div>
    <h1>❤️ Happy Birthday Jaan ❤️</h1>

    {showPhoto && (
  <img 
    className="birthday-photo" 
    src={girl2} 
    alt="My Love" 
  />
)}

    <div className="cake">
      🎂
    </div>

    {showPhoto && (
  <h2>❤️ Happy Birthday Jaan ❤️</h2>
)}

    <p>
  Ye chotta sa surprise aapke liye madam ji ❤️
  <br /><br />
  Mene socha kuch naya karte hain,
  isliye mene aisa kiya. ✨
  <br /><br />
  Vese to isse bhi bahut achha deserve karti ho tum,
  par meri taraf se itna sa hi hai madam ji 😚
</p>

    <button onClick={() => setPage(4)}>
      Open Letter 💌
    </button>
  </div>
)}
     {page === 4 && (
  <div className="card">
    <h1>💌 My Letter 💌</h1>

    <p>
      Meri Jaan ❤️
      <br /><br />
      Tum meri zindagi ki sabse khoobsurat kahani ho.
      <br /><br />
      Tumhari hasi meri sabse badi khushi hai.
      <br /><br />
      Happy Birthday Jaanu... 🌹❤️
      <br /><br />
      Hamesha muskuraati rehna. 💖
    </p>
    <button onClick={() => setPage(5)}>
  Our Cute Memories 💖
</button>

  
  </div>
)}
 {page === 5 && (
  <div className="card">
    <h1>💖 Your Cute Memories 💖</h1>

    <img
  key={memoryIndex}
  className="memory-photo"
  src={memories[memoryIndex]}
  alt="Memory"
  onClick={() =>
    setMemoryIndex((memoryIndex + 1) % memories.length)
  }
/>
 <p className="click-text">
  👆 Click photo to see next memory 💕
</p>
    <p>
      Kuch yaadein hamesha special hoti hain ❤️
      <br /><br />
      Ye choti choti memories mere liye bahut precious hain ✨
    </p>
<button onClick={() => setPage(6)}>
  Final Surprise 🎂
</button>

   
  </div>
)}
 {page === 6 && (
  <div className="card final-card">

    <div className="stars">
      ✨ 💖 ✨ 💖 ✨
    </div>

    <h1>🎂 Happy Birthday My Love ❤️</h1>

    <h2 className="time-title">
      ⏳ Your Beautiful Journey
    </h2>

    <p className="since-text">
      💕 Since 11 August 2009 💕
    </p>

    <div className="time-grid">

      <div className="time-box">
        <span>🎉</span>
        <strong>{age.years}</strong>
        <small>Years</small>
      </div>

      <div className="time-box">
        <span>📅</span>
        <strong>{age.months}</strong>
        <small>Months</small>
      </div>

      <div className="time-box">
        <span>🌸</span>
        <strong>{age.days}</strong>
        <small>Days</small>
      </div>

      <div className="time-box">
        <span>⏰</span>
        <strong>{age.hours}</strong>
        <small>Hours</small>
      </div>

      <div className="time-box">
        <span>💫</span>
        <strong>{age.minutes}</strong>
        <small>Minutes</small>
      </div>

      <div className="time-box">
        <span>💖</span>
        <strong>{age.seconds}</strong>
        <small>Seconds</small>
      </div>

    </div>

    <div className="birthday-heart">
      💗
    </div>

    <p className="final-message">
      💖 Every second since 11 August 2009
      <br />
      has made this world more beautiful.
      <br /><br />
      🎉 Happy Birthday My Love ❤️
    </p>

  </div>
)}
    </div>
  );
}
