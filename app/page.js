<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Letters</title>

<!-- Whimsical font -->
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&family=Dancing+Script:wght@600&display=swap" rel="stylesheet">

<style>
  body {
    margin: 0;
    background: #f7f3ee;
    font-family: 'Quicksand', sans-serif;
    overflow-x: hidden;
  }

  h1 {
    text-align: center;
    font-family: 'Dancing Script', cursive;
    margin-top: 30px;
    color: #b30000;
    font-size: 48px;
  }

  /* Hearts background */
  .heart {
    position: absolute;
    color: #ff4d4d;
    font-size: 18px;
    animation: float 6s infinite ease-in;
    opacity: 0.6;
  }

  @keyframes float {
    0% { transform: translateY(100vh) scale(0.8); opacity: 0; }
    50% { opacity: 0.7; }
    100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
  }

  /* Envelope buttons */
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 40px;
  }

  .envelope {
    width: 140px;
    height: 100px;
    background: #fff;
    border: 2px solid #b30000;
    border-radius: 8px;
    position: relative;
    cursor: pointer;
    transition: 0.3s;
  }

  .envelope:hover {
    transform: scale(1.05);
  }

  .envelope:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-top: 50px solid #ffcccc;
  }

  .label {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    font-weight: 600;
    color: #b30000;
  }

  /* Modal */
  .modal {
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.6);
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: white;
    padding: 30px;
    border-radius: 12px;
    width: 300px;
    text-align: center;
    font-family: 'Dancing Script', cursive;
    font-size: 22px;
    color: #b30000;
  }

  .close {
    margin-top: 15px;
    cursor: pointer;
    color: #333;
    font-family: 'Quicksand', sans-serif;
  }
</style>
</head>

<body>

<h1>Open When Letters 💌</h1>

<div class="container">
  <div class="envelope" onclick="openLetter('For when you miss me ❤️')">
    <div class="label">Miss Me</div>
  </div>

  <div class="envelope" onclick="openLetter('For when you’re sad 🥺')">
    <div class="label">Sad</div>
  </div>

  <div class="envelope" onclick="openLetter('For when you smile :)')">
    <div class="label">Happy</div>
  </div>
</div>

<!-- Modal -->
<div class="modal" id="modal">
  <div class="modal-content">
    <div id="text"></div>
    <div class="close" onclick="closeLetter()">close</div>
  </div>
</div>

<script>
  function openLetter(text) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("text").innerText = text;
  }

  function closeLetter() {
    document.getElementById("modal").style.display = "none";
  }

  // floating hearts generator
  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 5) + "s";
    document.body.appendChild(heart);
  }
</script>

</body>
</html>