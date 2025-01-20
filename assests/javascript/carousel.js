document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');

    // Initialize the first image to be fully visible
    images[currentIndex].style.display = 'block';

    // Function to show the next image
    function showNextImage() {
        // Hide the current image
        images[currentIndex].style.display = 'none';

        // Update the index to the next image
        currentIndex = (currentIndex + 1) % images.length;

        // Show the next image
        images[currentIndex].style.display = 'block';
    }

    // Start the carousel
    setInterval(showNextImage, 3000); // Change image every 3 seconds
});