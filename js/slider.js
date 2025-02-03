let currentPosition = 0;
const slider = document.querySelector('.product-slider');
const products = document.querySelectorAll('.product');
const productsToShow = 3;
const productWidth = 320; // 300px width + 20px gap

function moveSlide(direction) {
    const maxPosition = -(products.length - productsToShow) * productWidth;
    
    // For next button (direction = 1), move left (negative)
    // For prev button (direction = -1), move right (positive)
    currentPosition -= direction * productWidth;
    
    // Handle boundaries
    if (currentPosition > 0) {
        currentPosition = maxPosition;
    } else if (currentPosition < maxPosition) {
        currentPosition = 0;
    }
    
    slider.style.transform = `translateX(${currentPosition}px)`;
}