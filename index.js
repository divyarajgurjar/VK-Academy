const text = "VK Academy";
const container = document.getElementById("text-reveal");

text.split("").forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char;
  span.className = "animate-reveal";
  span.style.animationDelay = `${index * 0.05}s`;
  container.appendChild(span);
});
