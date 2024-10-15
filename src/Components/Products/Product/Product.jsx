import React, { useContext } from 'react';
import { ContextApp } from '../../Store/Store';
import Button from '../../Button/Button';
import styles from './Product.module.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Product = () => {
  const { productImg , addToWishlist } = useContext(ContextApp);

  return (
    <div className="container-fluid">
      <div className="row"> {productImg.map(item => (
            <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
              <div className={styles.colMd}>
                <div className={styles.imageContainer} key={item.id} >
                  <img src={item.img} alt={item.type} className="img-fluid" />
                </div>
                <span className={styles.star}>
                  <FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </span>
                <div className={styles.category}>{item.category}</div>
                <div className={styles.price}>{item.price}</div>
                <Button
                  label='Add to Wishlist'
                  onClick={() => addToWishlist(item)}
                />
              </div>
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default Product;
