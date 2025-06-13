// script.js
function soltarCoracoes() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.innerText = '💖';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
}
