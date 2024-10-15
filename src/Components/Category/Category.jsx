import React, { useContext } from 'react';
import { ContextApp } from '../Store/Store';
import style from './category.module.css';

const Category = ({ setSelectedCatgeory}) => {
  const { designerCategories } = useContext(ContextApp);

  return (
    <div>
      <h1 className={style.heading}>Our Most Popular   Designer Designs</h1>
      <div className={style.category}>
        {designerCategories.map((data) => (
          <div
            key={data.id}
            className={style.catImg}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              
            }}
          
            tabIndex={0}
            onClick={() => setSelectedCatgeory(data.heading.toLowerCase())}
          >
            <h4 className={`  uppercase ${style.categoryText}`}>{data.heading}</h4>
            <div className={style.overlay}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
