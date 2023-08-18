/**
 * Check Equator
 * Add text field and button
 */

document.getElementById("checkButton").addEventListener("click", function(){
  let myLat = parseFloat(document.getElementById("latOfUser").value);

  if (isNaN(myLat)) {
    console.error("Please enter a valid latitude");
  } else if (myLat > 0 && myLat <= 90){
    console.log("You're in the northern hemisphere");
  } else if (myLat < 0 && myLat > -90){
    console.log("You're in the southern hemisphere");
  } else if (myLat === 0){
    console.log("You're in the equator");
  } else {
    console.error("Invalid latitude");
  }
});

// Output the result to screen 
// Rewrite to check for eastern and Western hemisphere and prime
// chek the hemisphere and what that means?