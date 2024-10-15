import React from 'react';
import style from './lowerBanner.module.css';
import { FaWpexplorer, FaRegLightbulb, FaQrcode } from 'react-icons/fa';

const LowerBanner = () => {
  return (
    <>
<section className={`container-fluid ${style.designSection}`}>
<div className={` ${style.heading}`} style={{ color: 'black' }}>
        We Provide Expert Interior Designers
      </div>
  <div className="row align-items-center justify-content-center">
    <div className={`col-md-4 col-sm-12 ${style.box}`}>
      <FaQrcode className={style.icon} size={36} />
      <div className={style.text}>
        <h4 className={style.title}>Creative Solutions</h4>
        <p className={style.para}>
          At Homestyler, we specialize in creating personalized spaces that reflect your unique style, enhancing both functionality and beauty for a truly remarkable living experience.
        </p>
      </div>
    </div>
    <div className={`col-md-4 col-sm-12 ${style.box}`}>
      <FaWpexplorer className={style.icon} size={36} />
      <div className={style.text}>
        <h4 className={style.title}>Design Interior</h4>
        <p className={style.para}>
          Whether you seek a modern aesthetic or timeless elegance, we bring your ideas to life, ensuring that every detail harmonizes to create an inviting and inspiring environment.
        </p>
      </div>
    </div>
    <div className={`col-md-4 col-sm-12 ${style.box}`}>
      <FaRegLightbulb className={style.icon} size={36} />
      <div className={style.text}>
        <h4 className={style.title}>Intuitive Design</h4>
        <p className={style.para}>
          Our team of expert interior designers is dedicated to transforming your vision into reality, combining innovative design concepts with quality craftsmanship.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default LowerBanner;
