
import React, { useRef } from "react";
import './contact.css'
import Atos from '../../assets/Atos.png';
import YearUp from '../../assets/Yearup.png';
import JLK from '../../assets/JLK.png';
import SnapChatIcon from '../../assets/Snapchat.png';
import GmailIcon from '../../assets/Gmail.png';
import YahooIcon from '../../assets/Yahoo.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';





const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_97ed3hq', 'template_bct6afi', form.current, 'JsOvtqy6RZmBxJBF032DI')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
            Contributed to small business website development, enhancing skills in web development and addressing unique business needs.
            </p>
            
            <p className="clientDesc">Designed layouts for logos and designs at JIK Printing Design, delivering visually appealing solutions tailored to client requirements.
            </p>
            
            <p className="clientDesc">Created a client database at AtosCompany using <strong className="languageColor">JavaScript, HTML, and CSS,</strong> showcasing technical proficiency and problem-solving skills.
            </p>

            <div id="clientImg">
                <img src={YearUp} alt="Client" className="clientImg" />
                <img src={Atos} alt="" className="clientImg" />
                <img src={JLK} alt="" className="clientImg" />


            </div>

        </div>
        

        <div id="contact">

            <h1 className="contactPageTItle">Contact Me</h1>
            <span className="contactDesc">Please fill out form below if you need to reach me or go to my social media to send a DM/Emails (rezy3312@gmail.com)</span>

            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email' name='your_email' />
                <textarea className='msg' name="message"  rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                            <a href="https://www.snapchat.com/add/rezy_ahmed?share_id=GHug8Z4USNSElreYRm0aJA&locale=en_US" target="_blank" rel="noopener noreferrer">
                                <img src={SnapChatIcon} alt="Snapchat" className="link" />
                            </a>
                            
                            <a href="mailto:rezy3312@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src={GmailIcon} alt="Gmail" className="link" />
                            </a>
                            
                            <a href="https://www.instagram.com/rezy_ahmed/" target="_blank" rel="noopener noreferrer">
                                <img src={InstagramIcon} alt="Instagram" className="link" />
                            </a>
                            
                            <a href="mailto:rezy3312@yahoo.com" target="_blank" rel="noopener noreferrer">
                                <img src={YahooIcon} alt="Yahoo" className="link" />
                            </a>
                    </div>
            </form>
        </div>
        
    </section>
  )
}

export default Contact
