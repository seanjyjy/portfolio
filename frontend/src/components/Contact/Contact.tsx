import { useState } from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";

import { useWindowSize } from "@hooks";

import Keywords from "@commons/Keywords";
import UtilityIcons from "@commons/UtilityIcons";

import { links } from "../../constants";
import EmailImg from "../../images/emailImg.svg";

import "./Contact.scss";

const Contact = () => {
  const { width } = useWindowSize();

  const sendMessage = (message: Record<string, unknown>) => {
    emailjs
      .send(
        `${process.env.REACT_APP_EMAILJS_SERVICE}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
        message,
        `${process.env.REACT_APP_EMAILJS_USER}`
      )
      .catch((err) => console.log(err));
  };

  const [send, setIsSend] = useState(false);

  if (width == null) return null;

  return (
    <>
      <Helmet>
        <title>Sean | Contact</title>
        <meta
          name="description"
          content="Contact me if you wish you work on projects or talk to me :)"
        />
      </Helmet>
      <div className="contact-background">
        <div className="contactContainer2">
          <div className="contactImgContainer">
            {width >= 1025 && (
              <div className="contactHeader">
                <h2>CONTACT</h2>
                <h1>
                  Interested in what you see? If you wish to{" "}
                  <Keywords text="collaborate together, feel free to contact me." />
                </h1>
              </div>
            )}
            <img src={EmailImg} alt="email" loading="lazy" />
          </div>
          <div id="ContactContainer">
            <div id="Contact">
              {width < 1025 && (
                <div className="contactHeader">
                  <div>CONTACT</div>
                  <p>
                    Interested in what you see? If you wish to{" "}
                    <Keywords text="collaborate together, feel free to contact me." />
                  </p>
                </div>
              )}
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                onSubmit={(values, actions) => {
                  sendMessage(values);
                  actions.resetForm();
                  setIsSend(true);
                  setTimeout(() => {
                    setIsSend(false);
                  }, 3000);
                }}
              >
                {(props) => (
                  <Form
                    onSubmit={props.handleSubmit}
                    className="form-container"
                  >
                    <div className="name-email-holder">
                      <Form.Group
                        controlId="validationCustom01"
                        className="input-box-holder"
                      >
                        <label>Name:</label>
                        <input
                          required
                          type="text"
                          name="name"
                          onChange={props.handleChange}
                          value={props.values.name}
                          className="input-box"
                        />
                      </Form.Group>
                      <Form.Group
                        controlId="formBasicEmail"
                        className="input-box-holder"
                      >
                        <label>Email:</label>
                        <input
                          required
                          type="email"
                          name="email"
                          onChange={props.handleChange}
                          value={props.values.email}
                          className="input-box"
                        />
                      </Form.Group>
                    </div>
                    <Form.Group
                      controlId="formBasicMessage"
                      className="message-box-holder"
                    >
                      <label>Message:</label>
                      <textarea
                        required
                        name="message"
                        onChange={props.handleChange}
                        value={props.values.message}
                        className="message-box"
                      />
                    </Form.Group>
                    <div
                      style={{
                        display: "grid",
                        placeItems: "center",
                        padding: "20px",
                      }}
                    >
                      {!send ? (
                        <button type="submit" className="submit-button">
                          SEND
                        </button>
                      ) : (
                        <div>
                          Your message has been sent. I will reply to you as
                          soon as possible!
                        </div>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="contactFooter">
              {links.map((data, index) => (
                <a
                  className="util-icons-card"
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <UtilityIcons
                    name={data.name}
                    icon={data.icon}
                    key={index}
                    bgColor={data.bgColor}
                  />
                  <div>
                    <h3>{data.name}</h3>
                    <p>{data.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
