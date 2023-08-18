/**
 * Check Equator
 * Add text field and button
 */

document.getElementById("checkButtonlat").addEventListener("click", function() {
  let myLat = parseFloat(document.getElementById("latOfUser").value);
  let messageDiv = document.getElementById("latMessage");

  if (isNaN(myLat)) {
      messageDiv.textContent = "Please enter a valid latitude";
      messageDiv.style.color = "red";
  } else if (myLat > 0 && myLat <= 90) {
      messageDiv.textContent = "You're in the northern hemisphere";
      messageDiv.style.color = "green";
  } else if (myLat < 0 && myLat >= -90) {
      messageDiv.textContent = "You're in the southern hemisphere";
      messageDiv.style.color = "green";
  } else if (myLat === 0) {
      messageDiv.textContent = "You're on the equator";
      messageDiv.style.color = "blue";
  } else {
      messageDiv.textContent = "Invalid latitude";
      messageDiv.style.color = "red";
  }
});

// Check the Eastern or Western Hemisphere or prime meridian
// You can also add the code for Longitude using similar logic
document.getElementById("checkButtonlon").addEventListener("click", function() {
  let myLon = parseFloat(document.getElementById("longOfUser").value);
  let messageDiv = document.getElementById("lonMessage");

  if (isNaN(myLon)) {
      messageDiv.textContent = "Please enter a valid longitude";
      messageDiv.style.color = "red";
  } else if (myLon > 0 && myLon <= 180) {
      messageDiv.textContent = "You're in the eastern hemisphere";
      messageDiv.style.color = "green";
  } else if (myLon < 0 && myLon >= -180) {
      messageDiv.textContent = "You're in the western hemisphere";
      messageDiv.style.color = "green";
  } else if (myLon === 0) {
      messageDiv.textContent = "You're on the Prime Meridian";
      messageDiv.style.color = "blue";
  } else {
      messageDiv.textContent = "Invalid longitude";
      messageDiv.style.color = "red";
  }
});

// DarkMode
document.addEventListener("DOMContentLoaded", function() {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  const footer = document.querySelector("footer");

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
  });
});


// Output the result to screen 
// Rewrite to check for eastern and Western hemisphere and prime
// chek the hemisphere and what that means?