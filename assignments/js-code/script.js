let visitor = "";
let visitorPass = "";

if ((visitor = window.prompt("Who's there?")) === "admin") {
    visitorPass = window.prompt("What's your password");
    if (visitorPass === "TheMaster") {
        alert("Welcome!");
    } else if (visitorPass) {
        alert("Wrong password!");
    } else {
        alert("Canceled!");
    }
} else if (visitor) {
    alert("I don't know you!");
} else {
    alert("Canceled!");
}