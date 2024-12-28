const seasonalBackground = document.getElementsByClassName('seasonal-background');


function updateSeasonalBackground() {
  const now = new Date();
  const month = now.getMonth();

  if (month >= 2 && month <= 4) {
    // Spring
    seasonalBackground[0].style.background = 'radial-gradient(#87CEEB, #32CD32)';
  } else if (month >= 5 && month <= 7) {
    // Summer
    seasonalBackground[0].style.background = 'radial-gradient(#32CD32, #DB5431)';
  } else if (month >= 8 && month <= 10) {
    // Autumn
    seasonalBackground[0].style.background = 'radial-gradient(#EC4724, #FFA500)';
  } else {
    // Winter
    seasonalBackground[0].style.background = 'radial-gradient(#EC4724, #0082FB)';
  }
}

// Call the function to set the initial season based on the current date
updateSeasonalBackground();

// You can also update the season periodically (e.g., every hour)
setInterval(updateSeasonalBackground, 3600000); // Update every hour (3600000 milliseconds)
