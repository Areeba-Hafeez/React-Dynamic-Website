import React, { useContext } from 'react';
import { ContextApp } from '../Store/Store';
import { FaTrashAlt } from 'react-icons/fa';
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import navbarCss from './WishList.module.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Wishlist = () => {
  const { wishlist , removeFromWishlist } = useContext(ContextApp);

  if (wishlist.length === 0) {
    return (
      <div className={ ` text-custom_blue flex mt-5 mb-5 flex-col justify-center items-center ${navbarCss.emptyWishlist}`}>
        Your wishlist is empty. Let’s add some items!
        <span><BsEmojiSmileUpsideDown size={100} className='mt-3 text-custom-yellow' /></span>
      </div>
    );
  }

  return (
    <div className={`Container items-center ${navbarCss.wishlist}`}>
      {wishlist.map(item => (
        <div key={item.id} className={`row d-flex my-5 justify-center text-center items-center ${navbarCss.wishlistItem}`}>
          <div className={`${navbarCss.imagewrapper} col-md-6 col-sm-12`}>
            <img src={item.img} alt={item.name} className={navbarCss.wishlistItemImage} />
          </div>
          <div className={`${navbarCss.wishlistItemDetails} col-md-6 col-sm-12`}>
          <span className={navbarCss.star}>
                  <FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </span>
            <h3 className={` ${navbarCss.wishlistItemName}`}> Rating: { item.rating}</h3>
            <h3 className={` ${navbarCss.wishlistItemName}`}> Category: { item.category}</h3>
            <p className={navbarCss.wishlistItemPrice}> Price: {item.price} </p>
            <button className={navbarCss.removeButton} onClick={() => removeFromWishlist(item.id)}>
              Move To Trash <FaTrashAlt className={navbarCss.removeButtonIcon} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
