import "./contact.scss";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_ur1nw8u",
        "template_201yvg8",
        formRef.current,
        "YP3u4Ix6ySVqEYz45"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setSending(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="bg"></div>
      <div className="wrapper">
        <div className="left">
          <h1>Lets connect and chat</h1>
          <div className="info">
            <div className="info-item">
              <img src={Phone} alt="" />
              +264 81 654 7713
            </div>
            <div className="info-item">
              <img src={Email} alt="" />
              julian.benade@gmail.com
            </div>
            <div className="info-item">
              <img src={Address} alt="" />
              England, United Kingdom
            </div>
          </div>
        </div>
        <div className="right">
          <p className="desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name="message"
              rows="5"
              placeholder="Message..."
            />
            <button>
              {sending ? "Sending ..." : done ? "Sent" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
