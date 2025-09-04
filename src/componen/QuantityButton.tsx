import React, { useState } from "react";

export default function QuantityButton() {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity">
      <button id="Minus" onClick={handleSubtract}>
        -
      </button>
      <span id="Quantity">{quantity}</span>
      <button id="Plus" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}
