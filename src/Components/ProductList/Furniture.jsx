import React, { useContext, useState } from 'react';
import styles from '../ProductList/ProductList.module.css';
import Button from '../Button/Button';
import { ContextApp } from '../Store/Store';
import drop from './Drop.module.css';
import FurnitureCategories from '../ProductList/FurnitureCategories';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Furniture = () => {
  const { addToWishlist, furnitureItems } = useContext(ContextApp);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortedItems, setSortedItems] = useState(furnitureItems);

  const filteredItems = selectedCategory === 'all'
    ? sortedItems
    : sortedItems.filter(item => item.category.toLowerCase().trim() === selectedCategory);

  const handleSort = (name) => {
    let newSortedItems = [...furnitureItems]; 

    if (name === 'alphabetical') {
      newSortedItems.sort((a, b) => a.category.localeCompare(b.category));
    } else if (name === 'lowToHigh') {
      newSortedItems.sort((a, b) => a.price - b.price);
    } else if (name === 'highToLow') {
      newSortedItems.sort((a, b) => b.price - a.price);
    }

    setSortedItems(newSortedItems); 
  };

  return (
    <>
      <FurnitureCategories 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <h2 className={`mx-3 mx-sm-5 mx-md-5 ${styles.heading}`}>
        Our Most Popular {selectedCategory} Products
      </h2>
      <div className='flex items-center justify-center '>
        <span className={drop.navdropBtn} onClick={() => handleSort('alphabetical')}>A to Z</span>
        <span className={drop.navdropBtn} onClick={() => handleSort('lowToHigh')}>Low to High</span>
        <span className={drop.navdropBtn} onClick={() => handleSort('highToLow')}>High to Low</span>
      </div>

      <div className={styles.container}>
        {filteredItems.map(item => (
          <div className={styles.card} key={item.id}>
            <img className={styles.image} src={item.img} alt={item.category} />
            <div className={styles.category}>{item.category}</div>
            <div className={styles.price}>{item.price} PKR</div>
            <div className={styles.rating}>
              <span className='flex justify-center items-center text-2xl text-custom-yellow'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span> 
              {item.rating}
            </div>
            <Button label="ADD TO CART" onClick={() => addToWishlist(item)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Furniture;
