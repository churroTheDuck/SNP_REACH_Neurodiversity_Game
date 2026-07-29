const researchPercent = 40;
const teamTrustPercent = 40;
const stressPercent = 80;

function setBarFill(bar, percent) {
  if (!bar) return;

  bar.style.width = `${percent}%`;
  bar.style.backgroundColor = percent > 50 ? '#4FD1C5' : '#F4B942';
}

document.addEventListener('DOMContentLoaded', () => {
  const researchBar = document.querySelector('.bar-fill-research');
  const teamTrustBar = document.querySelector('.bar-fill-trust');
  const stressBar = document.querySelector('.bar-fill-stress');

  setBarFill(researchBar, researchPercent);
  setBarFill(teamTrustBar, teamTrustPercent);
  setBarFill(stressBar, stressPercent);
});