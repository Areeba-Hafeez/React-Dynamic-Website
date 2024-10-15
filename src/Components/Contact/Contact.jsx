import React , {useState} from 'react';
import contact from '../assest/contact.jpg';
import { FaPhoneAlt } from "react-icons/fa";
import  style from './Contact.module.css'

const ContactDetail = ({ phone }) => (
  <div className={`col-lg-12 col-md-12  col-sm-12 my-2 ${style.contactDetail}`}>
    <div className="detail ">
      <div className='flex gap-1 items-center'>
        <span className=' flex items-center justify-center'>
          <FaPhoneAlt className='cursor-pointer text-custom-yellow font-bold' size={20} />
        </span>
        <span className=' font-bold text-custom_blue  cursor-pointer'>{phone}</span>
      </div>
      <h5  className= {`  ${style.callBtn}  ml-5  text-custom_blue `} >Call Now</h5>
    </div>
  </div>
);

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !message) {
            setErrorMessage('Please fill in all fields.');
        } else {
            setErrorMessage('');
            alert('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        }
    };

  return (
    <>
      <div className="container-fluid  my-5 ">
        <div className=" row my-5">
          <div className="row flex justify-center items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <span className='text-custom-yellow font-bold text-[26px]'>Our Contacts</span>
              <p className= { ` ${ style.contactheading}  text-custom_blue `}>Easy to Contact us</p>
              <p className= { `${ style.para} `}>Have questions or ready to start your design journey? At Home  we’re eager to hear from you! Whether you’re looking for a consultation or want to discuss your project ideas, our team is here to help. Please fill out the contact form below, and we’ll get back to you promptly. Let’s collaborate to create a beautiful space that reflects your style. We look forward to connecting with you!

</p>
              
              <div className="row">
                {["0134567790", "0134567790", "0134567790"].map((phone, index) => (
                  <ContactDetail  key={index} phone={phone} />
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 flex items-center justify-center col-sm-12">
              <div className="image-container w-[400px] h-[500px] rounded-t-full">
                <img src={contact} className="w-full h-full rounded-t-full" alt="Contact" />
              </div>
            </div>
          </div>
        </div>
     
      <h1 className= {`  text-custom-blue  mb-3 uppercase ${ style.heading} `}>Get In Touch </h1>
     <div className={`row ${style.contactWrapper} `}>
     <div className="col-md-6  my-3 text-center  col-sm-12 ">
        <div className={style.mapContainer}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090836!2d144.95373631531693!3d-37.817209979751206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f4d3%3A0x5045675218ce6e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1612371605552!5m2!1sen!2sau" 
               
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
            />
        </div>
        </div>
        <div className="col-md-6 my-3   col-sm-12  ">   
            <form onSubmit={handleSubmit}>
                <label className={style.label} htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    className={style.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Username'
                />
                
                <label className={style.label} htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    className={style.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email address'
                />
                
                <label className={style.label} htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    className={style.textarea}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4" placeholder='Wrte your querries here?'
                />
                
                <button type="submit" className={style.button} > Send Message</button>
                {errorMessage && <p className={style.error}>{errorMessage}</p>}
            </form>
        </div>
     </div>
       </div>
      
    </>
  );
};

export default Contact;
