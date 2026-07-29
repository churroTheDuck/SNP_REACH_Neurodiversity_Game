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
  const initialScreen = document.querySelector('.initial-screen');
  const outcomeScreen = document.querySelector('.outcome-screen');
  const followupScreen = document.getElementById('followup-screen');
  const outcomeText = document.getElementById('outcome-text');
  const continueButton = document.getElementById('continue-button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      let message = '';

      if (action === 'research') {
        researchPercent = clampPercent(researchPercent + 10);
        teamTrustPercent = clampPercent(teamTrustPercent - 10);
        message = 'You spend the meeting focused on the research packet. By the time it ends, the student has already left. You made progress understanding today\'s project, but later realize you missed an opportunity to interact with a new teammate.\n\nResearch: +10 points\nTeam Trust: -10 points';
      } else if (action === 'trust') {
        teamTrustPercent = clampPercent(teamTrustPercent + 10);
        energyPercent = clampPercent(energyPercent - 5);
        message = 'The student gives a small smile before quietly taking a different seat anyway. You aren\'t sure why they didn\'t accept the invitation, but your gesture didn\'t go unnoticed by the rest of the team.\n\nTeam Trust: +10 points\nEnergy: -5 points';
      } else if (action === 'energy') {
        researchPercent = clampPercent(researchPercent - 5);
        teamTrustPercent = clampPercent(teamTrustPercent + 5);
        energyPercent = clampPercent(energyPercent - 7);
        message = 'They hesitate for a second before replying, "Yeah... it\'s fine." The conversation ends there, leaving you unsure whether you helped or accidentally made things more awkward. Still, you find yourself thinking more carefully about what just happened.\n\nResearch: -5 points\nTeam Trust: +5 points\nEnergy: -7 points';
      }

      if (initialScreen) {
        initialScreen.classList.add('hidden');
      }

      if (outcomeScreen) {
        outcomeScreen.classList.remove('hidden');
      }

      if (followupScreen) {
        followupScreen.classList.add('hidden');
      }

      if (outcomeText) {
        outcomeText.textContent = message;
      }

      updateBars();
    });
  });

  if (continueButton) {
    continueButton.addEventListener('click', () => {
      if (outcomeScreen) {
        outcomeScreen.classList.add('hidden');
      }

      if (followupScreen) {
        followupScreen.classList.remove('hidden');
      }
    });
  }

  updateBars();
});