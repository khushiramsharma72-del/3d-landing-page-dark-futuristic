const tiltItems = document.querySelectorAll('.tilt');

const handleTilt = (event, element) => {
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const rotateY = ((x / rect.width) - 0.5) * 14;
  const rotateX = (0.5 - (y / rect.height)) * 14;

  element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
};

for (const item of tiltItems) {
  item.addEventListener('mousemove', (event) => handleTilt(event, item));
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });
}
