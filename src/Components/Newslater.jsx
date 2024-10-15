import React, { useState } from 'react';
import newslaterCss from '../Components/assest/style.module.css'; 
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Newslater = () => {
  const [email, setEmail] = useState('');

  const handleInput = () => {
    const emailRegex = /^[a-zA-Z][0-9]*[!#$%&'*+/=?^_`{|}~-]*@*gmail\.com$/;
  
    if (emailRegex && email !== '') {
  alert('Subscription successful!');
      setEmail(''); 
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className={`newslaterSection ${newslaterCss.newslaterSection} pt-5 mb-0 pb-0 bg-gray-100 w-full bg-cover bg-center`}>
      <div className="newslater-content h-full items-center flex justify-center flex-col">
        <div className='text-2xl my-5 text-custom-yellow uppercase font-bold mx-auto'>News Later</div>
        <h2 className={`text-custom_blue font-bold  text-2xl mb-[2vh] leading-[30px] uppercase py-0 px-[30px]`}>
          Sign up for latest updates and Offers
        </h2>
        <div className="form flex flex-col mb-[3vh] items-center justify-center">
          <input 
            className={`w-[300px] h-[45px] pl-[1.5vw] text-[16px] border border-black-900 rounded-full flex items-center bg-white-800 placeholder-text-black  input-banner-newsletter`} 
            type="text" 
            placeholder='hello123!@gmail.com' 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button  
            className='mt-4 news-letter rounded-custom_lg mt-[2vh] flex items-center justify-center h-[2.7rem] w-[160px] cursor-pointer text-2xl bg-custom_blue text-custom_white font-medium' 
            onClick={handleInput}
          >
            Subscribe
          </button>
        </div>
        <div className={`mb-[20px] text-[10px] font-bold text-custom_blue`}>
          Will be used in accordance with our privacy policy
        </div>
        <div className="social-icons pb-5 flex gap-5">
          <div className="icons bg-black-300 gap-4 flex items-center justify-center text-white-400">
            <CiInstagram className={`bg-custom_blue rounded-full text-white`} size={35} />
            <CiFacebook className={`bg-custom_blue rounded-full text-white`} size={35} />
            <FaWhatsapp className={`bg-custom_blue rounded-full text-white`} size={35} />
            <CiTwitter className={`bg-custom_blue rounded-full text-white`} size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newslater;
