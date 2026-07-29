let researchPercent = 40;
let teamTrustPercent = 40;
let energyPercent = 80;

function clampPercent(value) {
  return Math.max(0, Math.min(100, value));
}

function setBarFill(bar, percent) {
  if (!bar) return;

  bar.style.width = `${percent}%`;
  bar.style.backgroundColor = percent > 50 ? '#4FD1C5' : '#F4B942';
}

function updateBars() {
  const researchBar = document.querySelector('.bar-fill-research');
  const teamTrustBar = document.querySelector('.bar-fill-trust');
  const energyBar = document.querySelector('.bar-fill-stress');

  setBarFill(researchBar, researchPercent);
  setBarFill(teamTrustBar, teamTrustPercent);
  setBarFill(energyBar, energyPercent);
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.options button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;

      if (action === 'research') {
        researchPercent = clampPercent(researchPercent + 10);
        teamTrustPercent = clampPercent(teamTrustPercent - 10);
      } else if (action === 'trust') {
        teamTrustPercent = clampPercent(teamTrustPercent + 10);
        energyPercent = clampPercent(energyPercent - 5);
      } else if (action === 'energy') {
        researchPercent = clampPercent(researchPercent - 5);
        teamTrustPercent = clampPercent(teamTrustPercent + 5);
        energyPercent = clampPercent(energyPercent - 7);
      }

      updateBars();
    });
  });

  updateBars();
});