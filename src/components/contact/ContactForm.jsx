import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import emailjs from "@emailjs/browser";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import "./contactForm.scss";

const ContactForm = () => {
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
    // <section className="contact section" id="contact">
    //   <h2 className="section__title">Get in touch</h2>
    //   <span className="section__subtitle">Contact Me</span>

    //   <div className="contact__container container grid">
    //     <div className="contact__content">
    //       <h3 className="contact__title">Talk to me</h3>
    //       <div className="contact__info">
    //         <div className="contact__card">
    //           <box-icon type="solid" name="contact"></box-icon>
    //           <h3 className="contact__card-title">Email</h3>
    //           <span className="contact__card-data">
    //             julian.benade@gmail.com
    //           </span>
    //         </div>

    //         <div className="contact__card">
    //           <box-icon type="solid" name="contact"></box-icon>
    //           <h3 className="contact__card-title">Whatsapp</h3>
    //           <span className="contact__card-data">+264 81 654 7713</span>
    //         </div>

    //         <div className="contact__card">
    //           <box-icon type="solid" name="contact"></box-icon>
    //           <h3 className="contact__card-title">Messenger</h3>
    //           <span className="contact__card-data">Farts</span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="contact__content">
    //       <h3 className="contact__title">Write to me</h3>
    //       <form ref={formRef} onSubmit={handleSubmit}>
    //         <input
    //           style={{ backgroundColor: darkMode && "#333" }}
    //           type="text"
    //           placeholder="Name"
    //           name="user_name"
    //         />
    //         <input
    //           style={{ backgroundColor: darkMode && "#333" }}
    //           type="text"
    //           placeholder="Subject"
    //           name="user_subject"
    //         />
    //         <input
    //           style={{ backgroundColor: darkMode && "#333" }}
    //           type="email"
    //           placeholder="Email"
    //           name="user_email"
    //         />
    //         <textarea
    //           style={{ backgroundColor: darkMode && "#333" }}
    //           name="message"
    //           rows="5"
    //           placeholder="Message..."
    //         />
    //         <button>
    //           {sending ? "Sending ..." : done ? "Sent" : "Send Message"}
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </section>

    <section className="contact " id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact-container">
        <div className="left">
          <h3 className="title">Talk to me</h3>
          <div className="info">
            <div
              className="card"
              style={{
                boxShadow: theme.state.darkMode
                  ? "0px 0px 10px 10px rgba(19, 19, 19, 0.64)"
                  : "0px 0px 18px 2px rgba(209,209,209,0.64)",
              }}
            >
              <HiOutlineMail
                style={{
                  color: theme.state.darkMode ? "white" : "black",
                  width: "24px",
                  height: "24px",
                }}
              />
              <h3 className="card-title">Email</h3>
              <span className="card-data">julian.benade@gmail.com</span>
            </div>

            <div
              className="card"
              style={{
                boxShadow: theme.state.darkMode
                  ? "0px 0px 10px 10px rgba(19, 19, 19, 0.64)"
                  : "0px 0px 18px 2px rgba(209,209,209,0.64)",
              }}
            >
              <AiOutlinePhone
                style={{
                  color: theme.state.darkMode ? "white" : "black",
                  width: "24px",
                  height: "24px",
                }}
              />
              <h3 className="card-title">Phone number</h3>
              <span className="card-data">+264 81 654 7713</span>
            </div>

            <div
              className="card"
              style={{
                boxShadow: theme.state.darkMode
                  ? "0px 0px 10px 10px rgba(19, 19, 19, 0.64)"
                  : "0px 0px 18px 2px rgba(209,209,209,0.64)",
              }}
            >
              <GoLocation
                style={{
                  color: theme.state.darkMode ? "white" : "black",
                  width: "24px",
                  height: "24px",
                }}
              />
              <h3 className="card-title">Location</h3>
              <span className="card-data">England, United Kingdom</span>
            </div>
          </div>
        </div>
        <div className="right">
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
    </section>
  );
};

export default ContactForm;
