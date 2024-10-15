import React, { useContext , useState  } from 'react';
import styles from './ProductList.module.css'
 import Button from '../Button/Button'
 import LightingCategories from './LightingCategories.jsx'
 import  {ContextApp} from '../Store/Store'
 import drop from './Drop.module.css';


const Lighting = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
   const {addToWishlist , lightingItems }  = useContext(ContextApp)
    const [sortedItems , setSortedItems] = useState(lightingItems)
   
       const handleSort = (name) =>{
          let sortedProducts = [...lightingItems]
        if(name === 'alphabetical'){
          sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
        } else if (name === 'highToLow'){
          sortedProducts.sort((a, b) => b.price - a.price)
          //  console.log(sortedProducts)
        }
         else if( name === 'lowToHigh'){
          sortedProducts.sort((a, b) => a.price - b.price)
        }
         setSortedItems(sortedProducts)
       }
       const  filterData =  selectedCategory === "All" ?
       sortedItems :  sortedItems.filter((item) => item.category === selectedCategory ) 
  return (
    
   <>
   <LightingCategories selectedCategory = { selectedCategory}  setSelectedCategory = {setSelectedCategory}  />
    <h2 className= { ` mx-3 mx-sm-5 mx-md-5 ${styles.heading}`}>Our Most  Popular  {selectedCategory}  Products </h2>
    <div className='flex items-center justify-center '>
        <span className={drop.navdropBtn} onClick={() => handleSort('alphabetical')}>A to Z</span>
        <span className={drop.navdropBtn} onClick={() => handleSort('lowToHigh')}>Low to High</span>
        <span className={drop.navdropBtn} onClick={() => handleSort('highToLow')}>High to Low</span>
      </div>
    <div className={styles.container}>
        {filterData.map(item => (
          <div className={styles.card} key={item.id}>
            <img className={styles.image} src={item.img} alt={item.category} />
            <div className={styles.category}>{item.category}</div>
            <div className={styles.price}>{item.price} PKR</div>
            <div className={styles.rating}>Rating: {item.rating}</div>
            <Button label="ADD TO CART" className ={ `mt-0`}  onClick={ () => addToWishlist(item) }></Button>
          </div>
          
        ))}
      </div>
   </>
   
  
  );
};

export default Lighting;
