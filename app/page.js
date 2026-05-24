"use client";
import React from "react";

export default function OpenWhenLetters() {
  const letters = [
    {
      title: "Open when you need a smile",
      message:
        "Hi you 💌\n\nJust a reminder that you’ve survived every hard day so far, and that counts for something.",
    },
    {
      title: "Open when life feels heavy",
      message:
        "Take things one step at a time. You do not need to solve everything tonight.",
    },
    {
      title: "Open when you can’t sleep",
      message:
        "Close your eyes, breathe slowly, and let tomorrow handle tomorrow.",
    },
    {
      title: "Open when you need motivation",
      message:
        "You’ve done hard things before. Start small, then keep going.",
    },
    {
      title: "Open on your birthday",
      message:
        "Happy birthday 🎂\n\nI hope today feels soft, fun, and full of love.",
    },
    {
      title: "Open when you miss me",
      message:
        "Some people leave little pieces of themselves behind in memories. This is one of them.",
    },
  ];

  const [selected, setSelected] = React.useState(null);

  return (
    <div className="min-h-screen bg-pink-50 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-2 text-center">Open When… 💌</h1>
      <p className="text-center mb-8 max-w-xl text-lg">
        For the days you need a little something, pick a letter.
      </p>

      {selected === null ? (
        <div className="grid md:grid-cols-2 gap-4 w-full max-w-4xl">
          {letters.map((letter, index) => (
            <button
              key={index}
              onClick={() => setSelected(letter)}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:scale-105 transition"
            >
              <div className="text-2xl mb-2">✉️</div>
              <h2 className="text-xl font-semibold">{letter.title}</h2>
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>
          <p className="whitespace-pre-line text-lg mb-6">
            {selected.message}
          </p>
          <button
            onClick={() => setSelected(null)}
            className="px-4 py-2 rounded-xl bg-pink-100 hover:bg-pink-200"
          >
            Back to letters
          </button>
        </div>
      )}
    </div>
  );
}