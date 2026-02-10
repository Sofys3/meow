// Get elements
const yes = document.getElementById('yesBtn');
const no = document.getElementById('noBtn');
const question = document.getElementById('question');

// Get URL name param for personalization
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
if (shaiderman) {
  question.innerText = `Will you be my Valentine, ${shaiderman}? 💘`;
}

// Yes button action
yes.onclick = () => {
  document.body.innerHTML = `
    <div class="container">
      <h1>Yay! 💝 Thank you!</h1>
      <p>You made my day ❤️</p>
    </div>
  `;

  // Optional: start confetti if you added confetti.js
  if (typeof startConfetti === "function") startConfetti();
};

// No button action (makes the button run away!)
no.onclick = () => {
  const x = Math.random() * 300 - 150; // move horizontally
  const y = Math.random() * 150 - 75;  // move vertically
  no.style.transform = `translate(${x}px, ${y}px)`;
};
