import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from '../Category/Category';
import { ContextApp } from '../Store/Store';
import styles from './Designer.module.css';

const Designer = () => {
  const { designerItems } = useContext(ContextApp);
  const [selectedCategory, setSelectedCatgeory] = useState("all");
  
  const filterData = selectedCategory === "all"
    ? designerItems
    : designerItems.filter((item) => item.category.toLowerCase() === selectedCategory);

  return (
    <>
      <Category selectedCategory={selectedCategory} setSelectedCatgeory = {setSelectedCatgeory} />
      <div className="Container">
        <h2 className={`  ${styles.heading}`}>Our Most Popular {selectedCategory} Designs</h2>
        <div className="row w-100 flex items-center justify-center">
          {filterData.map(item => (
            <div className={`col-md-4 col-sm-6  mb-4 ${styles.designBox}`} key={item.id}>
              <Link to={`/portfolio/${item.id}`}>
                <img
                  src={item.img}
                  className={`img-fluid ${styles.image}`}
                  alt={`${item.category} design`}
                  
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Designer;
