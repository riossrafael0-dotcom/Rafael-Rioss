document.addEventListener('DOMContentLoaded', () => {
  const infoBtn = document.getElementById('infoBtn');
  const infoPanel = document.getElementById('infoPanel');

  if (!infoBtn || !infoPanel) return;

  infoBtn.addEventListener('click', () => {
    infoPanel.classList.toggle('active');
    infoPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
