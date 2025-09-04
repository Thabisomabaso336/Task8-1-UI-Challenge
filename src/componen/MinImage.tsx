import React from 'react'

export default function MinImage() {
  return (
    <img
    src={"src/assets/image-product-1.jpg"}
    alt="sneaker main"
    style={{
width:"400px",
height:"400px",
borderRadius:"12px",
marginBottom:"23px",
objectFit:"cover"
    }}
    />
  );
}
