window.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from localStorage
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const mobile = localStorage.getItem("mobile");
    const registrationType = localStorage.getItem("registartion_type");
    const nameone = name;

    // Check if the data exists and display it
    /*if (name!="") {
        document.getElementById("displayName").textContent = name;
    } else {
        document.getElementById("displayName").textContent = "Name not available";
    }

    if (email) {
        document.getElementById("displayEmail").textContent = email;
    } else {
        document.getElementById("displayEmail").textContent = "Email not available";
    }

    if (mobile) {
        document.getElementById("displayMobile").textContent = mobile;
    } else {
        document.getElementById("displayMobile").textContent = "Name not available";
    }

    if (registrationType) {
        document.getElementById("displayRegistrationType").textContent = registrationType;
    } else {
        document.getElementById("displayRegistrationType").textContent = "Registration not available";
    }*/
    document.getElementById("displayNameone").textContent = nameone;
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayMobile").textContent = mobile;
    document.getElementById("displayRegistrationType").textContent = registrationType;
});