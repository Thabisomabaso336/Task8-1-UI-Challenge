import React from "react";

export default function ThumbImage() {
  return (
    <div className="thumbImage">
      <div>
        <img
          style={{ height: "44%", width: "82%" }}
          src={"src/assets/image-product-1-thumbnail.jpg"}
          alt="Thumbnail"
          
        />
      </div>
      <div>
        <img
          style={{ height: "42%", width: "80%" }}

          src={"src/assets/images/image-product-2-thumbnail.jpg"}
          alt="Thumbnail"
        />
      </div>
      <div>
        <img
          style={{ height: "42%", width: "80%" }}
          src={"src/assets/images/image-product-3-thumbnail.jpg"}
          alt="Thumbnail"
        />
      </div>
      <div>
        <img
          style={{ height: "44%", width: "82%" }}
          src={"src/assets/images/image-product-4.jpg"}
          alt="Thumbnail"
        />
      </div>
    </div>
  );
}
