const bubbles = [
  { x: 10, y: 8, size: 220, color: "#fff261", speed: 0.08 },
  { x: 75, y: 45, size: 140, color: "#ffe66a", speed: 0.09 },
  // { x: 88, y: 50, size: 100, color: "#fffd75", speed: 0.18 },
  { x: 20, y: 60, size: 180, color: "#f5ffbd", speed: 0.06 },
  { x: 82, y: 85, size: 300, color: "#e9ff8f", speed: 0.07 },
  // { x: 38, y: 90, size: 400, color: "#ff8484", speed: 0.05 },
];

const layer = document.getElementById("bubble-layer");

bubbles.forEach((b) => {
  const el = document.createElement("div");
  el.className = "bubble";
  el.style.cssText = `
    width: ${b.size}px;
    height: ${b.size}px;
    left: ${b.x}%;
    top: ${b.y}%;
    background: ${b.color};
    filter: blur(${Math.round(b.size * 0.05)}px);
  `;
  el.dataset.speed = b.speed;
  layer.appendChild(el);
});

const els = layer.querySelectorAll(".bubble");
window.addEventListener(
  "scroll",
  () => {
    const sy = window.scrollY;
    els.forEach((el) => {
      const speed = parseFloat(el.dataset.speed);
      el.style.transform = `translateY(${sy * speed}px)`;
    });
  },
  { passive: true },
);
