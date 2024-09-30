function alertSubFunc(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    alert("Subscribed with email: " + email);
}

window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}