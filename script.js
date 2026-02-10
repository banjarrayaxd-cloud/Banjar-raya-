const spinBtn = document.getElementById("spinBtn");
const reels = [
  document.getElementById("reel1"),
  document.getElementById("reel2"),
  document.getElementById("reel3")
];

const symbols = ["cherry.png", "seven.png", "bar.png", "diamond.png"];

spinBtn.addEventListener("click", () => {
  let results = [];

  reels.forEach((reel, index) => {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    reel.querySelector("img").src = `images/${randomSymbol}`;
    results.push(randomSymbol);
  });

  // Cek menang
  if (results[0] === results[1] && results[1] === results[2]) {
    document.getElementById("result").textContent = "🎉 Jackpot! 🎉";
  } else {
    document.getElementById("result").textContent = "Coba lagi!";
  }
});
