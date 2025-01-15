// Display a popup message when the website loads
window.onload = function () {
    alert("Welcome to Watch Haven! Discover our exclusive watch collection.");
  };
  
  // Dynamically update product price
  function updatePrices() {
    const luxuryWatch = document.querySelector(
      ".product:first-child p:last-child"
    );
    if (luxuryWatch) {
      luxuryWatch.textContent = "$450 (Special Discount!)";
    }
  }
  
  // Call the updatePrices function
  updatePrices();
  