import React from 'react'

export default function NavBar() {
  return (
    <div className='navBar'>
<section className='leftsection'>
    <div>
      <h1 className='SneakersLogo'>Sneakers</h1></div>
    <div className='link'>collections</div>
    <div className='link'>Men</div>
    <div className='link'>Women</div>
    <div className='link'>About</div>
    <div className='link'>contact</div>
</section>

<section className='rightsection'>
    <div>
      <img 
      src="/src/assets/images/icon-cart.svg" alt="Cart" />
    </div>
  <div>
      <img 
      src="/src/assets/images/image-avatar.png" alt="Avatar" 
      style={{width:"40px", height:"39px", borderRadius:"50%"}}/>
  </div>
</section>
    </div>
    

  )
}
