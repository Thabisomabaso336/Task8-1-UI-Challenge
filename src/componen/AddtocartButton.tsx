import React, { useState } from "react";

export default function AddtocartButton() {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => {

    setCartCount(cartCount + 1);
    
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
          marginTop: "1.8rem",
        }}
      >
        🛒 Add to Cart
      </button>

      {/* A simple display to show that the cart count is updating. */}
      <div style={{ marginTop: "7px", fontSize: "14px", color: "#555" }}>
        Total items in cart: <strong>{cartCount}</strong>
      </div>
    </div>
  );
}
