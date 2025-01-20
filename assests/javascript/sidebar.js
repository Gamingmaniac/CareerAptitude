// JavaScript to control sidebar and overlay behavior
function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    const isOpen = sidebar.style.left === "0px";
    sidebar.style.left = isOpen ? "-250px" : "0px";
    overlay.style.display = isOpen ? "none" : "block";
}

function logout() {
    alert("You have been logged out.");
    // Implement your logout logic here
}

// Ensure the sidebar is hidden on page load
window.onload = function () {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    overlay.style.display = "none";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "999";
    overlay.onclick = toggleSidebar;
    sidebar.style.left = "-250px";
};

// Function to check login status and redirect
function checkLoginAndRedirect() {
    const isLoggedIn = true; // Replace with actual login check
    if (isLoggedIn) {
        window.location.href = 'biometric.html';
    } else {
        alert("Please log in to access the quiz.");
        window.location.href = 'login.html';
    }
}
