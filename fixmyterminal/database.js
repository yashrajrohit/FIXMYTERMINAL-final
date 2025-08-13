// Theme toggle button logic
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Form submit handler
function submitError(event) {
  event.preventDefault();

  const errorMessage = document.getElementById("errorMessage").value.trim();
  const programmingLanguage = document.getElementById("programmingLanguage").value;
  const userThoughts = document.getElementById("userThoughts").value.trim();

  if (!errorMessage || !programmingLanguage) {
    alert("Please fill in the required fields!");
    return;
  }

  // For now just simulate success, you can add Firebase saving code here
  document.getElementById("thankYouMessage").style.display = "block";

  // Clear the form inputs
  document.getElementById("contributeForm").reset();

  // Hide thank you message after 4 seconds
  setTimeout(() => {
    document.getElementById("thankYouMessage").style.display = "none";
  }, 4000);
}
