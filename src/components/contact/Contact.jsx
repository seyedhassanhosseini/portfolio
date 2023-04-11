
import './contact.scss';
import contact from "./../../assests/test/shake.svg";
import { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm('service_xnm0hcj', 'template_ecwihqd', form.current, 'M6VK7rCpefR94awXr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={contact} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}

