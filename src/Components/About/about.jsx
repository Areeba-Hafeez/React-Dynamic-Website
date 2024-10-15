import React from "react";
import styles from "./AboutUs.module.css";
import img from '../assest/aboutpic.jpg'
import img2 from '../assest/emily.jpeg'
import img3 from '../assest/johndoe.jpeg'
import img4 from '../assest/michael.jpeg'
const AboutUs = () => {
  return (
 <>
    <div className= {`  ${styles.heading}`}>Let Something Know About Our  Designer </div>
    <div className="container mt-5 aboutcontainer">
      <div className={`${styles.aboutrow} row mt-5`}>
        <div className={`${styles.aboutpic} col `}>
          <img src={img} alt="" />
        </div>
        <div className={`${styles.aboutpara} col `}>'
            <h3 className={`${styles.weltext}`}>Welcome to</h3>
            <h1 className={`${styles.aboutbold}`}>Home Styler</h1>
            <p className={`${styles.aboutpara}`}>
            At Home styler, we are passionate about transforming spaces into beautiful and functional homes. Our platform showcases a curated collection of stunning interior designs, featuring a wide range of products from elegant furniture to exquisite home decor. Whether you're looking to revamp your kitchen, create a serene bathroom retreat, or elevate your living space, we provide endless inspiration and practical solutions. Explore diverse design styles, visualize your dream interiors, and discover high-quality products that bring your vision to life. Join us in the journey of creating spaces that reflect your personal style and enhance your everyday living.
            </p>
        </div>
      </div>
      <div className= {`  ${styles.heading}`}>Our Expert Designer</div>
      <div className="row mt-5">
        <div className="col mb-4">
      <div className={styles.abcard}>
      <div className={styles.abcardBorderTop}></div>
      <div className={styles.abimg}>
      <img src={img2} alt="" />
    </div>
      <span>Emily Sketch</span>
      <p className={styles.abjob}>Our Top Designer</p>
      </div>
    </div>
        <div className="col mb-4">
      <div className={styles.abcard}>
      <div className={styles.abcardBorderTop}></div>
      <div className={styles.abimg}>
      <img src={img3} alt="" />
    </div>
      <span>john Doe</span>
      <p className={styles.abjob}>Our Top Designer</p>
      </div>
    </div>
        <div className="col mb-4">
      <div className={styles.abcard}>
      <div className={styles.abcardBorderTop}></div>
      <div className={styles.abimg}>
      <img src={img4} alt="" />
    </div>
      <span>Michael Brown</span>
      <p className={styles.abjob}>Our Top Designer</p>
      </div>
    </div>
    </div>
    </div>
 </>
  );
};


export default AboutUs;
