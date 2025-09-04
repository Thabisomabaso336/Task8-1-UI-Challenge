import React from 'react'

export default function NavBar() {
  return (
    <div className='navBar'>
<section className='leftsection'>
    <div>
      <h1>Sneakers</h1></div>
    <div>collections</div>
    <div>Men</div>
    <div>Women</div>
    <div>About</div>
    <div>contact</div>
</section>

<section className='rightsection'>
    <div>
      <img 
      src="/src/assets/images/icon-cart.svg" alt="Cart" />
    </div>
  <div>
      <img 
      src="/src/assets/images/image-avatar.png" alt="Avatar" 
      style={{width:"40px", height:"35px", borderRadius:"50%"}}/>
  </div>
</section>
    </div>
    

  )
}
