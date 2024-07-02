document.addEventListener("DOMContentLoaded", () => {
  const cardFr = document.getElementById("card-fr");
  const cardEn = document.getElementById("card-en");
  const toggleButton = document.getElementById("toggle-language");

  // Initially display only the French map
  cardEn.classList.add("hidden");

  // Function to switch between English and French maps
  function toggleLanguage() {
    cardFr.classList.toggle("hidden");
    cardEn.classList.toggle("hidden");

    // Update button text according to language displayed
    if (cardFr.classList.contains("hidden")) {
      toggleButton.textContent = "FR";
    } else {
      toggleButton.textContent = "EN";
    }
  }

  // Add an event listener to switch between languages
  toggleButton.addEventListener("click", toggleLanguage);

  // Set button text to default language
  toggleButton.textContent = "EN";
});
