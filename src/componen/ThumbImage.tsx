import React from 'react'

export default function ThumbImage() {
  return (
    <div>
      <img
       src={"src/assets/image-product-1-thumbnail.jpg"}
       alt="Thumbnail" 
         style={{width:"80px", 
            height:"80px",
             borderRadius:"8px", 
             marginRight:"20px", 
             objectFit:"cover"}}
     />
    </div>
  )
}
