const loginOverlay = document.getElementById("loginOverlay");


function openLogin() {
    loginOverlay.style.display = "flex";
}


function closeLogin() {
    loginOverlay.style.display = "none";
}


function login(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    localStorage.setItem("studentEmail", email);

    // Go to course selection page
    window.location.href = "course.html";
}

