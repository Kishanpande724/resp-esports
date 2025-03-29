// Wait for the window to fully load
window.addEventListener('load', function () {
    // Hide the loading screen after the page is fully loaded
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Disable scroll while loading screen is visible
    document.body.style.overflow = 'hidden'; // Disable scrolling

    // Add a delay to simulate loading, then display the main content
    setTimeout(function () {
        loadingScreen.style.display = 'none';  // Hide the loading screen
        mainContent.style.display = 'block';  // Show the main content
        document.body.style.overflow = 'auto'; // Enable scrolling again
    }, 2000);  // Adjust the time (in milliseconds) as needed
});



// Function to toggle the dropdown menu
function toggleDropdown() {
    var dropdown = document.getElementById("navBar");

    // Check if the dropdown is currently displayed
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";  // Hide dropdown
    } else {
        dropdown.style.display = "block";  // Show dropdown
    }
}









