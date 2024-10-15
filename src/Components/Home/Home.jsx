import React from 'react'
 import LowerBanner from '../LowerBanner/LowerBanner'
import style from '../assest/style.module.css'
 import Products from '../Products/Products'
const Home = () => {
  return (
  <>
    <LowerBanner/>
    <div className={ `{ ${style.mainContent}}`}>
      <div className= { `${style.layout}`}>
      <Products headingText ={ 'popular products'}/>
      </div>
    </div>
  </>
  )
}

export default Home