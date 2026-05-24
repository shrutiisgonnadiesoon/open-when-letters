"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const letters = [
    { title: "Miss Me", text: "I miss you in quiet ways I can’t explain." },
    { title: "Sad", text: "This feeling is temporary. You’re going to be okay." },
    { title: "Happy", text: "Hold onto this feeling a little longer." },
    { title: "Motivation", text: "Keep going. You’re closer than you think." },
    { title: "Overthinking", text: "Not every thought is true. Let it pass." },
    { title: "Night", text: "Rest now. Tomorrow will feel lighter." }
  ];

  useEffect(() => {
    const container = document.getElementById("hearts");

    for (let i = 0; i < 20; i++) {
      const h = document.createElement("div");
      h.innerHTML = "❤";
      h.style.position = "absolute";
      h.style.left = Math.random() * 100 + "vw";
      h.style.fontSize = Math.random() * 18 + 10 + "px";
      h.style.animation = `float ${4 + Math.random() * 4}s linear infinite`;
      h.style.opacity = 0.4;
      container.appendChild(h);
    }
  }, []);

  return (
    <div style={styles.page}>
      {/* HEARTS */}
      <div id="hearts" style={styles.hearts}></div>

      <h1 style={styles.title}>Open When Letters 💌</h1>
      <p style={styles.sub}>click an envelope</p>

      {/* ENVELOPES */}
      <div style={styles.grid}>
        {letters.map((l, i) => (
          <div
            key={i}
            style={styles.envelope}
            onClick={() => {
              setMessage(l.text);
              setOpen(true);
            }}
          >
            <div style={styles.flap}></div>
            <div style={styles.label}>{l.title}</div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {open && (
        <div style={styles.modal} onClick={() => setOpen(false)}>
          <div style={styles.paper} onClick={(e) => e.stopPropagation()}>
            {message}
            <div style={styles.close} onClick={() => setOpen(false)}>
              close
            </div>
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style>{`
        @keyframes float {
          from { transform: translateY(100vh); }
          to { transform: translateY(-10vh); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f7f2ec",
    fontFamily: "sans-serif",
    overflow: "hidden",
    position: "relative"
  },
  title: {
    textAlign: "center",
    fontSize: "42px",
    color: "#b30000",
    marginTop: "20px",
    fontFamily: "cursive"
  },
  sub: {
    textAlign: "center",
    marginTop: "-10px",
    color: "#7a5c5c"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "20px",
    padding: "30px",
    maxWidth: "900px",
    margin: "auto"
  },
  envelope: {
    height: "110px",
    background: "#fff",
    border: "2px solid #b30000",
    borderRadius: "10px",
    position: "relative",
    cursor: "pointer",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
  },
  flap: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "50px",
    background: "#ffd6d6",
    clipPath: "polygon(0 0, 50% 100%, 100% 0)"
  },
  label: {
    position: "absolute",
    bottom: "12px",
    width: "100%",
    textAlign: "center",
    color: "#b30000",
    fontWeight: "600"
  },
  modal: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    background: "#fffdf9",
    padding: "25px",
    borderRadius: "12px",
    width: "320px",
    textAlign: "center",
    fontFamily: "cursive",
    fontSize: "20px",
    color: "#b30000"
  },
  close: {
    marginTop: "15px",
    fontSize: "14px",
    cursor: "pointer",
    color: "#333"
  },
  hearts: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none"
  }
};