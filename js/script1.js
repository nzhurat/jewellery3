// Get the advertisement window element
const advertisementWindow = document.getElementById("advertisement-window");
// Get the subscribe and no thanks buttons
const subscribeBtn = document.getElementById("subscribe-btn");
const noThanksBtn = document.getElementById("no-thanks-btn");
// Check if the user has already subscribed
const subscribed = sessionStorage.getItem("subscribed");

if (subscribed) {
  // Hide the advertisement window if the user has already subscribed
  advertisementWindow.style.display = "none";
} else {
  // Show the advertisement window if the user has not subscribed
  // Show the advertisement window when the page is loaded
  window.addEventListener("load", () => {
    advertisementWindow.style.display = "block";
  });
  // Add an event listener to the subscribe button
  subscribeBtn.addEventListener("click", () => {
    // Set the subscribed flag in session storage
    sessionStorage.setItem("subscribed", true);
    // Hide the advertisement window
    advertisementWindow.style.display = "none";
  });
  // Add an event listener to the no thanks button
  noThanksBtn.addEventListener("click", () => {
    // Hide the advertisement window
    advertisementWindow.style.display = "none";
   // Show the advertisement window again after 1 minute
    setTimeout(() => {
      advertisementWindow.style.display = "block";
    }, 60000);
  });
}

// Show pop-up window every 1 minute if "No, thanks" is pressed
setInterval(function() {
  if (!sessionStorage.getItem("subscribed") && sessionStorage.getItem("popup_closed") !== "true") {
    document.getElementById("popup").style.display = "block";
  }
}, 60000);

// Show pop-up window only after reloading website if "Subscribe" is pressed
window.onload = function() {
  if (sessionStorage.getItem("popup_closed") !== "false") {
    document.getElementById("popup").style.display = "block";
  }
}

function closePopup() {
  sessionStorage.setItem("popup_closed", "true");
  document.getElementById("popup").style.display = "none";
  // Show the pop-up window again after 1 minute
  setTimeout(function() {
    document.getElementById("popup").style.display = "block";
  }, 60000);
}

function subscribe() {
  sessionStorage.setItem("popup_closed", "false");
  document.getElementById("popup").style.display = "none";
}



