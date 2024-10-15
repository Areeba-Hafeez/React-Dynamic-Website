import React from 'react'; 
import Product from './Product/Product';
import styles from './Products.module.css';

const Products = ({ addBtn }) => {
  return (
    <div className="product-container container-fluid pt-5">
      <div className={` mx-3 mx-sm-5 mx-md-5 ${styles.heading}`} style={{ color: 'black' }}>
        Most Popular Designer Products
      </div>
      <div className="d-flex justify-content-center flex-wrap my-5">
        <Product addBtn={true} />
      </div>
    </div>
  );
};

export default Products;
