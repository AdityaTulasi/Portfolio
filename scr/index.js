const quotes = [
  "Technology empowers us to turn our dreams into reality.",
  "Innovation is the bridge between your ideas and the future.",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Coding is poetry written in the language of machines.",
  "Never stop learning, because life never stops teaching.",
  "Technology is a tool, creativity is the driver.",
  "Software is the closest thing we have to magic.",
  "Every problem is an opportunity to create a solution.",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The only way to do great work is to love what you do.- Steve Jobs"
];

let currentIndex = 0;

function changeQuote() {
  const heroText = document.querySelector("#hero p");
  heroText.textContent = quotes[currentIndex];
  currentIndex = (currentIndex + 1) % quotes.length;
}

setInterval(changeQuote, 10000);
