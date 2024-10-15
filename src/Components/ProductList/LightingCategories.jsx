import React, { useContext } from 'react';
import { ContextApp } from '../Store/Store';
import styles from   './ProductList.module.css'

const LightingCategories = ({ selectedCategory, setSelectedCategory }) => {
  const { LightingCategories } = useContext(ContextApp);

  return (
    <div className='container-fluid'>
      <h4 className={` ${styles.heading} `}>Product Categories</h4>
      <div className={styles.innerCategory}>
        {LightingCategories.map((data) => (
         <div 
         key={data.id} 
         className={`  ${styles.catImg} ${selectedCategory === data.category ? styles.active : ''}`}
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.light})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         
           
         }}
              
         onClick={() => setSelectedCategory(data.category)}
          >
            <div className= { `  ${styles.categoryText}`} >
             {data.category}
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default LightingCategories;
