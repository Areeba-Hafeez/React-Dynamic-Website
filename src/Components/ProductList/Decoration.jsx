import React, { useContext , useState } from 'react';
import drop from './Drop.module.css';
import styles from '../ProductList/ProductList.module.css';
import Button from '../Button/Button';
import DecorationCategories from './DecorationCategories'
 import {ContextApp} from '../Store/Store'



const Decoration = () => {
  const  {addToWishlist , decorationItems }  = useContext(ContextApp)
   const [sortedItems , setSortedItems] = useState(decorationItems)
   const [selectedCategory , setSelectedCategory]  = useState( 'all' )

const handleSort = (name) => {
    let newSortedItems = [...decorationItems]; 
    if (name === 'alphabetical') {
      newSortedItems.sort((a, b) => a.category.localeCompare(b.category));
    } else if (name === 'lowToHigh') {
      newSortedItems.sort((a, b) => a.price - b.price);
    } else if (name === 'highToLow') {
      newSortedItems.sort((a, b) => b.price - a.price);
    }
    setSortedItems(newSortedItems); 
  };

    const filterData = selectedCategory === "all" ? sortedItems :  sortedItems.filter((item) => item.category.toLowerCase().trim() ===  selectedCategory)
  return (
  <><DecorationCategories setSelectedCategory = {setSelectedCategory}  selectedCategory = {selectedCategory}/>
       <h2 className= { ` mx-3 mx-sm-5 mx-md-5 ${styles.heading}`}>Our  Most Popular {selectedCategory } Products </h2>
       
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
    <div className={styles.price}>{item.price}</div>
    <div className={styles.rating}>Rating: {item.rating}</div>
    <Button  label="ADD TO CART"   onClick={ () => addToWishlist(item) }/>
          </div>
        ))}
      </div>
  </>
    
  );
};

export default Decoration;
