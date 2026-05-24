"use client";

import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const letters = [
    { title: "Miss Me", text: "I miss you in quiet ways I can’t explain." },
    { title: "Sad", text: "This feeling will pass. You’re going to be okay." },
    { title: "Happy", text: "Hold onto this feeling a little longer." },
    { title: "Motivation", text: "Keep going. You’re closer than you think." },
    { title: "Overthinking", text: "Not every thought deserves your attention." },
    { title: "Night", text: "Rest now. Tomorrow will feel softer." }
  ];

  return (
    <div className="page">

      {/* HEARTS */}
      <div className="hearts">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="heart">❤</span>
        ))}
      </div>

      <h1>Open When Letters 💌</h1>
      <p className="sub">click an envelope</p>

      {/* ENVELOPES */}
      <div className="grid">
        {letters.map((l, i) => (
          <div
            key={i}
            className="envelope"
            onClick={() => {
              setMsg(l.text);
              setOpen(true);
            }}
          >
            <div className="flap"></div>
            <div className="label">{l.title}</div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {open && (
        <div className="modal" onClick={() => setOpen(false)}>
          <div className="paper" onClick={(e) => e.stopPropagation()}>
            {msg}
            <div className="close" onClick={() => setOpen(false)}>close</div>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f7f2ec;
          font-family: 'Quicksand', sans-serif;
          overflow: hidden;
          position: relative;
        }

        h1 {
          text-align: center;
          font-family: cursive;
          font-size: 48px;
          color: #b30000;
          margin-top: 25px;
        }

        .sub {
          text-align: center;
          color: #7a5c5c;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 20px;
          padding: 30px;
          max-width: 900px;
          margin: auto;
        }

        .envelope {
          height: 110px;
          background: #fff;
          border: 2px solid #b30000;
          border-radius: 10px;
          position: relative;
          cursor: pointer;
          transition: 0.2s;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
        }

        .envelope:hover {
          transform: translateY(-5px);
        }

        .flap {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50px;
          background: #ffd6d6;
          clip-path: polygon(0 0, 50% 100%, 100% 0);
        }

        .label {
          position: absolute;
          bottom: 12px;
          width: 100%;
          text-align: center;
          font-weight: 600;
          color: #b30000;
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .paper {
          background: #fffdf9;
          padding: 25px;
          border-radius: 12px;
          width: 320px;
          text-align: center;
          font-family: cursive;
          font-size: 22px;
          color: #b30000;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .close {
          margin-top: 15px;
          font-size: 14px;
          cursor: pointer;
          color: #333;
        }

        .hearts {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .heart {
          position: absolute;
          color: #ff4d4d;
          font-size: 14px;
          opacity: 0.4;
          animation: float 6s linear infinite;
        }

        .heart:nth-child(odd) { left: 10%; }
        .heart:nth-child(even) { left: 80%; }

        @keyframes float {
          from { transform: translateY(100vh); opacity: 0; }
          50% { opacity: 0.6; }
          to { transform: translateY(-10vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}