import React, { useContext } from 'react';
import { ContextApp } from '../Store/Store';
import styles from './ProductList.module.css';

const FurnitureCategories = ({ selectedCategory, setSelectedCategory }) => {
  const { furnitureCategories } = useContext(ContextApp);

  return (
    <div className='Container-fluid '>
      <h2 className= { `   ${styles.heading}`}>Product Categories</h2>
      <div className={styles.innerCategory}>
        {furnitureCategories.map(data => (
          <div
            key={data.id}
            className={`m-4 ${styles.catImg} ${selectedCategory === data.category ? styles.active : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.furnitureImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
             
            }}
            onClick={() => setSelectedCategory(data.category.toLowerCase().trim())}
          >
            <div className={styles.categoryText}>{data.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureCategories;
