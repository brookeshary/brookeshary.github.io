const getCurrentSeason = document.getElementsByClassName('migration-status');


// Function to get the current season
    function getCurrentSeason() {
      const now = new Date();
      const month = now.getMonth() + 1; // Adding 1 to convert from 0-based to 1-based month

      if (month >= 3 && month <= 5) {
        return "Spring";
      } else if (month >= 6 && month <= 8) {
        return "Summer";
      } else if (month >= 9 && month <= 11) {
        return "Autumn";
      } else {
        return "Winter";
      }
    }

    // Function to update the text based on the current season
    function updateSeasonalText() {
      const season = getCurrentSeason();
      const elements = document.getElementsByClassName("migration-status");

      // Update text based on the season for all elements with the class name
      for (let i = 0; i < elements.length; i++) {
        switch (season) {
          case "Spring":
            elements[i].textContent = "Migrating North";
            break;
          case "Summer":
            elements[i].textContent = "Spread Across North America";
            break;
          case "Autumn":
            elements[i].textContent = "Migrating South";
            break;
          case "Winter":
            elements[i].textContent = "Overwintering";
            break;
          default:
            elements[i].textContent = "Migration Patterns";
            break;
        }
      }
    }

    // Call the update function immediately and set an interval to update every hour
    updateSeasonalText();
    setInterval(updateSeasonalText, 3600000);
