import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextApp } from './Store/Store';
import Button from '../Components/Button/Button';
import styles from '../Components/Products/Product/Product.module.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Search = () => {
  const { productImg, furnitureItems, designerItems, decorationItems , lightingItems } = useContext(ContextApp);
  const [filterData, setFilterData] = useState([]);
  const { term } = useParams();

  useEffect(() => {

    const allProducts = [
      ...productImg,
      ...furnitureItems,
      ...designerItems,
      ...decorationItems,
       ...lightingItems
    ];

    const filtered = allProducts.filter((p) =>
      p.category.toLowerCase().trim().includes(term.toLowerCase().trim())
    );

    setFilterData(filtered);
  }, [term, productImg, furnitureItems, designerItems, lightingItems, decorationItems]);

  return (
    <>
    
      <div>
      <div className={` mx-3 mx-sm-5 mx-md-5 ${styles.heading}`} style={{ color: 'black' }}>
        Our  Most Popular {term} Products
      </div>
        <div className="container-fluid mt-5 text-center">
          
          <div className="row d-flex justify-center items-center">
            
            {filterData.length > 0 ? (
              filterData.map(item => (
                <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
                  <div className={styles.colMd}>
                    <div className={styles.imageContainer}>
                      <img src={item.img} alt={item.type} className="img-fluid" />
                    </div>
                    <span className={styles.star}>
                      <FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                    </span>
                    <div className={styles.category}>{item.category}</div>
                    <div className={styles.price}>${item.price}</div>
                    <Button
                      label='Add to Wishlist'
                      onClick={() => addToWishlist(item)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.errorMsg}>No results found.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
