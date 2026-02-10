document.addEventListener("DOMContentLoaded", () => {
  const yes = document.getElementById('yesBtn');
  const no = document.getElementById('noBtn');
  const question = document.getElementById('question');

  // Personalized URL support
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  if (name) {
    question.innerText = `Will you be my Valentine, ${name}? 💘`;
  }

  // Yes button click
  yes.onclick = () => {
    document.body.innerHTML = `
      <div class="container">
        <h1>Yay! 💝 Thank you!</h1>
        <p>You made my day ❤️</p>
      </div>
    `;

    if (typeof startConfetti === "function") startConfetti();
  };

  // No button click (runs away)
  no.onclick = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 150 - 75;
    no.style.transform = `translate(${x}px, ${y}px)`;
  };
});
