import React from 'react';
import feedbackCss from './Feedback.module.css';

const Feedback = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log('Feedback submitted');
    };

    return (
        <>
        
        <section className= {`container  py-5 ${feedbackCss.fb} `}>
        <div className={`product-heading  ml-5   ${feedbackCss.heading} `}>Help Us Improve Give Us Your Feedback!</div>
      <div className="row">
      <div className="col-md-6 col-sm-12">
           <div className={feedbackCss.text}>
                <h1>We value your opinion!</h1>
                <p>
                    Thank you for taking the time to share your thoughts with us. Your feedback is crucial in helping us enhance our services and ensure we meet your needs effectively. Whether you have suggestions for improvement, comments on your recent experience, or any questions, we are eager to hear from you. Please provide as much detail as possible so that we can better understand your perspective and address any concerns you might have. We are committed to continuously improving and your input plays a vital role in shaping our future. We look forward to hearing from you and appreciate your contribution to our ongoing efforts.
                </p>
            </div>
           </div>
          <div className="col-md-6 col-sm-12">
          <form onSubmit={handleSubmit} className= {feedbackCss.feedbackForm}>
                <h2>Give Your Feedback</h2>
                <div className={feedbackCss.inputbox}>
                    <label>Full Name</label>
                    <input
                        type="text"
                        className={feedbackCss.field}
                        placeholder="Enter your Name"
                        pattern="^[a-zA-Z\s]*$"
                        required
                    />
                </div>
                <div className={feedbackCss.inputbox}>
                    <label>Email Address</label>
                    <input
                        type="email"
                        className={feedbackCss.field}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className={feedbackCss.inputbox}>
                    <label>Give your feedback here</label>
                    <textarea
                        className={feedbackCss.fieldmess}
                        placeholder="Write something..."
                        required
                    ></textarea>
                </div>
                <div className={feedbackCss.rating}>
                    <p>Are you satisfied with our services?</p>
                    <input
                        className={feedbackCss.yn}
                        type="radio"
                        name="satisfaction"
                        id="yes"
                        value="yes"
                    />
                    <label htmlFor="yes">Yes</label>
                    <input
                        className={feedbackCss.yn}
                        type="radio"
                        name="satisfaction"
                        id="no"
                        value="no"
                    />
                    <label htmlFor="no">No</label>
                </div>
                <button type="submit">Send</button>
            </form>
          </div>
      </div>
        </section>
        </>
    );
};

export default Feedback;
