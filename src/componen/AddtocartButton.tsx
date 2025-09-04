import React, { useState } from "react";

export default function AddtocartButton() {
  // Use the useState hook to create a state variable for the cart count.
  // The count is initialized to 0.
  const [cartCount, setCartCount] = useState(0);

  // This function is called when the button is clicked.
  const handleAddToCart = () => {
    // Increment the cart count by 1.
    setCartCount(cartCount + 1);
    // You can also add more logic here, like sending data to a server or a global state manager.
    console.log(`Added item to cart. Total items: ${cartCount + 1}`);
  };

  return (
    <div className="Button">
      <button
        onClick={handleAddToCart}
        style={{
          backgroundColor: "hsl(26, 100%, 55%)",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "9px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        🛒 Add to Cart
      </button>

      {/* A simple display to show that the cart count is updating. */}
      <div style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
        Total items in cart: <strong>{cartCount}</strong>
      </div>
    </div>
  );
}
