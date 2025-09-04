import React from 'react'

export default function ThumbImage() {
  return (
    <div className='thumbImage'>
      <div>
        <img
          src={"src/assets/image-product-1-thumbnail.jpg"}
          alt="Thumbnail"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "8px",
            marginRight: "20px",
            objectFit: "cover"
          }}
        />
      </div>
      <div>
        <img
          src={"src/assets/images/image-product-2-thumbnail.jpg"}
          alt="Thumbnail"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "8px",
            marginRight: "20px",
            objectFit: "cover"
          }}
        />
      </div>
      <div>
        <img
          src={"src/assets/images/image-product-3-thumbnail.jpg"}
          alt="Thumbnail"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "8px",
            marginRight: "20px",
            objectFit: "cover"
          }}
        />
      </div>
      <div>
        <img
          src={"src/assets/images/image-product-4.jpg"}
          alt="Thumbnail"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "8px",
            marginRight: "20px",
            objectFit: "cover"
          }}
        />
      </div>
    </div>
  )
}
