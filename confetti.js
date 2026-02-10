function startConfetti() {
  const colors = ["#ff69b4","#ff1493","#ffb6c1","#d10068"];
  for(let i=0; i<100; i++){
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.position = "absolute";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.borderRadius = "50%";
    confetti.style.left = Math.random()*window.innerWidth + "px";
    confetti.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    document.body.appendChild(confetti);

    confetti.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity:1 },
      { transform: `translateY(${window.innerHeight}px) rotate(${Math.random()*360}deg)`, opacity:0 }
    ], { duration: 3000 + Math.random()*2000, iterations:1, easing:'ease-out' });

    setTimeout(()=> confetti.remove(), 5000);
  }
}
