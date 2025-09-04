import React from 'react'

export default function AddtocartButton() {
  return (
    <div>
      <button style={{
        backgroundColor: 'hsl(26, 100%, 55%)',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '9px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
       🛒   Add to Cart
      </button>
    </div>
  )
}

