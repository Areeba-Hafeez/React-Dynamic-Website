import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../assest/payments.png";
import style from './Footer.module.css';

const Footer = () => {
    return (
      <>
        <div className={ `container-fluid px-5 mt-0 pt-0  ${style.footer}`}>
            <div className={`row py-5`}>
                <div className={`col-md-4 col-sm-6 `}>
                    <div className={style.title}>About</div>
                    <div className={style.text}>
                    Our website provides you with elegant home decor ideas, stylish furnishings, DIY tips, and inspiration to create your perfect living space. Explore comfort and beauty today!z
                    </div>
                </div>
                <div className={`col-md-4 col-sm-6 `}>
                    <div className={style.title}>Contact</div>
                    <div className={style.cItem}>
                        <FaLocationArrow />
                        <div className={style.text}>
                            Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha,
                            Kerala, 688006
                        </div>
                    </div>
                    <div className={style.cItem}>
                        <FaMobileAlt />
                        <div className={style.text}>Phone: 0471 272 0261</div>
                    </div>
                    <div className={style.cItem}>
                        <FaEnvelope />
                        <div className={style.text}>Email: store@.com</div>
                    </div>
                </div>
                <div className={`col-md-2 col-sm-6 flex flex-col `}>
                <div className={style.title}>Categories</div>        
                <div className={style.categoryList}>
                <span className={style.text}>Furniture</span>
                <span className={style.text}>Lighting</span>
                 <span className={style.text}>Decoration</span>
                 <span className={style.text}>Bedroom</span>
                 <span className={style.text}>Livingroom</span>
                <span className={style.text}>Kitchen</span>
                <span className={style.text}>Washroom</span>
             </div>

                </div>
                <div className={`col-md-2 col-sm-6 `}>
                    <div className={style.title}>Pages</div>
                    <span className={style.text}>Home</span>
                    <span className={style.text}>About</span>
                    <span className={style.text}>Products</span>
                    <span className={style.text}>Feedback</span>
                    <span className={style.text}>Designer</span>
                    <span className={style.text}>Contact Us</span>
                </div>
            </div>
            <div className={style.bottomBar}>
                <div className={style.bottomBarContent}>
                    <span className={style.lowerText}>
                        JSDEVSTORE 2022 CREATED BY JS DEV. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} className={style.paymentImg} alt="Payment Methods" />
                </div>
            </div>
        </div>
        </>
    );
      
};

export default Footer;
