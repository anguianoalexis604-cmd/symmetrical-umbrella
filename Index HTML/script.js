let visitorName = prompt("Please enter your name:");

if (!visitorName) {
    visitorName = "Guest";
}

alert("Welcome to the site, " + visitorName + "!");

document.getElementById("welcome-title").textContent = "Welcome to My Home Page, " + visitorName + "!";