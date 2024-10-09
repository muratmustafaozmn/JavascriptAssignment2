// Select all thumbnail images and the featured image elements
const thumbnails = document.querySelectorAll('#thumbnail-list img');
const featuredImage = document.getElementById('featured-image');
const imageCaption = document.getElementById('image-caption');

// Function to update the featured image and caption based on the clicked thumbnail
function changeImage() {
    // Change the source of the featured image to the full-size version
    featuredImage.src = this.dataset.full;
    // Update the caption text to reflect the clicked thumbnail
    imageCaption.textContent = this.alt;

    // Remove the active class from all thumbnails to reset their styles
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    // Add the active class to the currently clicked thumbnail
    this.classList.add('active');
}

// Attach event listeners to each thumbnail image
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', changeImage);
});
