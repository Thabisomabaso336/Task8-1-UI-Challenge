import React from "react";

export default function NormalPrice() {
  return (
    <div>
      <span
        style={{
          textDecoration: "line-through",
          color: "gray",
          fontWeight: 500,
          fontSize: "0.9rem",
          marginBottom: "2rem",
        }}
      >
        $250.00
      </span>
    </div>
  );
}
