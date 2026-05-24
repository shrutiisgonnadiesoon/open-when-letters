"use client";

const letters = [
  "Open when you miss me 💌",
  "Open when you're sad 💗",
  "Open when you need motivation ✨",
  "Open when you can't sleep 🌙",
  "Open when you're stressed 💞",
  "Open when you need a reminder 💐",
  "Open when you're happy ☀️",
  "Open when you need a hug 🤍",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ee] p-8 relative overflow-hidden">
      
      {/* floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-red-500 opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* title */}
      <div className="relative z-10 text-center mb-12">
        <h1
          className="text-7xl text-red-700"
          style={{
            fontFamily: "cursive",
          }}
        >
          Open When...
        </h1>

        <p className="text-2xl mt-4 text-red-600 italic">
          a little piece of me, for every version of you ♡
        </p>
      </div>

      {/* envelope buttons */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {letters.map((letter, index) => (
          <button
            key={index}
            className="relative bg-[#fffaf0] rounded-xl shadow-lg p-6 h-40 hover:scale-105 transition-transform border border-red-200"
          >
            {/* envelope flap */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#f5ede0] rounded-t-xl clip-path-triangle"></div>
            <div className="relative z-10 mt-10 text-center text-red-800 font-medium">
              {letter}
            </div>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-3xl">
              ❤️
            </div>
          </button>
        ))}
      </div>

      {/* footer */}
      <p className="relative z-10 text-center mt-16 text-red-600 text-xl italic">
        no matter what, im always here for you <span className="text-red-400">♡</span>
      
      </p>
    </main>
  );
}