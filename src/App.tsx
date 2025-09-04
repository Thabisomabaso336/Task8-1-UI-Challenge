import React from 'react'
import "./App.css"
import NavBar from './componen/NavBar';
import Paragraph from './componen/Paragraph';
import MinImage from './componen/MinImage';
import ThumbImage from './componen/ThumbImage';
import DiscountBadge from './componen/DiscountBadge';
import AddtocartButton from './componen/AddtocartButton';
import NormalPrice from './componen/NormalPrice';
import SalePrice from './componen/SalePrice';
import CartIcon from './componen/CartIcon';



 function App() {
  return (
    <>
    <NavBar/>
    
    <div className='col'>
   <div className='minImage'><MinImage/></div>
    <div className='thumbImage'><ThumbImage/></div>
  </div>
  
    <div className='col'>
   <div className='paragraph'><Paragraph/></div>
    <div className='discountBadge'><DiscountBadge/></div>
    <div className='addtocartButton'><AddtocartButton/></div>
    <div className='normalPrice'><NormalPrice/></div>
    <div className='salePrice'><SalePrice/></div>
    <div className='col'><CartIcon/></div>

    </div>
   
  </>
  
  )
}
export default App;
