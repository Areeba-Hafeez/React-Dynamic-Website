import React, { useContext  } from 'react';
import { ContextApp } from '../Store/Store';
import styles from './ProductList.module.css'

const DecorationCategories = ({  setSelectedCategory}) => {
  const { DecorationCategories } = useContext(ContextApp);
  return (
    <div className= 'container-fluid'>
      <h2 className= { ` ${styles.heading}`}>Product Categories</h2>
      <div className= {styles.innerCategory}>
        {DecorationCategories.map((data) => (
          <div 
            key={data.id} 
            className= { ` m-4 ${styles.catImg}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.decor})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer', 
            }}
            onClick={() => setSelectedCategory(data.category.toLowerCase())}
          >
            <div className={styles.categoryText}>
              {data.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default   DecorationCategories;
