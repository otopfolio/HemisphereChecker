document.getElementById("checkButton").addEventListener("click", function() {
  let coordinates = document.getElementById("coordinates").value.split(",");
  
  if (coordinates.length !== 2) {
      alert("Please enter coordinates in the format: latitude, longitude");
      return;
  }

  let myLat = parseFloat(coordinates[0].trim());
  let myLon = parseFloat(coordinates[1].trim());

  let messageDiv = document.getElementById("latMessage");

  let latMessage = "";
  let lonMessage = "";

  let funFacts = {
      "North": [
          "- The North Pole is located in the Arctic Ocean.",
          "- Some of the world's largest countries, including Russia and Canada, are in the Northern Hemisphere.",
          "- Most of the Earth's landmass is situated in the Northern Hemisphere."
      ],
      "South": [
          "- The South Pole is located on the continent of Antarctica.",
          "- The Southern Hemisphere has only one-eighth of the world's total human population.",
          "- December marks the start of summer in the Southern Hemisphere."
      ],
      "East": [
          "- The Eastern Hemisphere includes most of Africa, Europe, Asia, and Oceania.",
          "- It is home to some of the world's oldest civilizations.",
          "- Mount Everest, the world's highest peak, is located in the Eastern Hemisphere."
      ],
      "West": [
          "- The Western Hemisphere includes most of North and South America.",
          "- It's home to the Amazon River, the world's largest by volume.",
          "- The Rocky Mountains, spanning Canada to the US, are in the Western Hemisphere."
      ]
  };

  // Check Latitude
  if (isNaN(myLat)) {
      messageDiv.textContent = "Please enter a valid latitude";
      messageDiv.style.color = "red";
      return;
  } else if (myLat > 0 && myLat <= 90) {
      latMessage = "North";
  } else if (myLat < 0 && myLat >= -90) {
      latMessage = "South";
  } else if (myLat === 0) {
      latMessage = "Equator";
  } else {
      messageDiv.textContent = "Invalid latitude";
      messageDiv.style.color = "red";
      return;
  }

  // Check Longitude
  if (isNaN(myLon)) {
      messageDiv.textContent = "Please enter a valid longitude";
      messageDiv.style.color = "red";
      return;
  } else if (myLon > 0 && myLon <= 180) {
      lonMessage = "East";
  } else if (myLon < 0 && myLon >= -180) {
      lonMessage = "West";
  } else if (myLon === 0) {
      lonMessage = "Prime Meridian";
  } else {
      messageDiv.textContent = "Invalid longitude";
      messageDiv.style.color = "red";
      return;
  }


// Combining the messages and setting the color
let factMessage = "";
if (latMessage !== "Equator" && lonMessage !== "Prime Meridian") {
    factMessage = "<br><br><strong>Here is your Fun Facts<span> 😀 </span> :</strong><br>";
    if (latMessage !== "Equator") {
        factMessage += funFacts[latMessage].join("<br>") + "<br>";
    }
    if (lonMessage !== "Prime Meridian") {
        factMessage += funFacts[lonMessage].join("<br>");
    }
}
    
if (latMessage === "Equator") {
    messageDiv.innerHTML = "You're on the Equator and in the " + lonMessage + " Hemisphere" + factMessage;
} else if (lonMessage === "Prime Meridian") {
    messageDiv.innerHTML = "You're in the " + latMessage + " Hemisphere and on the Prime Meridian" + factMessage;
} else {
    messageDiv.innerHTML = "You're in the " + latMessage + " " + lonMessage + " Hemisphere" + factMessage;
}
messageDiv.style.color = "green";

});
