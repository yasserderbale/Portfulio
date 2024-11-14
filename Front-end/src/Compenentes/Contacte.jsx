import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Navbarepricipale } from "./Navbarepricipale";
import { RiMailSendFill } from "react-icons/ri";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export const Contacte = () => {
  const notify = (message, type) => {
    if (type == "error") {
      toast.error(message);
    } else if (type == "success") {
      toast.success(message);
    }
  };
  const [fromdata, setfromdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const updatemessage = (e) => {
    setfromdata({ ...fromdata, [e.target.name]: e.target.value });
  };
  const sendmessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/contact",
        fromdata
      );
      console.log(response.data);
      notify("Sent successfully", "success");
      setfromdata({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("حدث خطأ:", error);
      notify("Error in the transmitter", "error");
    }
  };
  return (
    <div className="contacte">
      <Navbarepricipale />
      <div className="paragraphecontacte">
        <p className="contactP">Contact</p>
        <h1 className="contactH">
          I’m available for every
          <br /> opportunity!
        </h1>
        <p className="contactT">
          Interested in working with me? Need help on your project? Or
          <br /> just want to say hi? I’d love to hear from you!
        </p>
      </div>
      <form onSubmit={sendmessage} className="container Form">
        <Container className=" contentfrmular mt-3">
          <RiMailSendFill className="sendmessage" />
          <div className="lableinput">
            <label className="lable" htmlFor="">
              Name
            </label>
            <input
              required
              className="input"
              name="name"
              onChange={updatemessage}
              value={fromdata.name}
            />
          </div>
          <div className="lableinput">
            <label className="lable" htmlFor="">
              ُEmail
            </label>
            <input
              required
              type="email"
              className="input"
              name="email"
              onChange={updatemessage}
              value={fromdata.email}
            />
          </div>
          <div className="lableinput">
            <label className="lable" htmlFor="">
              Message
            </label>
            <textarea
              required
              name="message"
              className="inputMessage"
              onChange={updatemessage}
              value={fromdata.message}
            />
          </div>
          <button type="submit" className="button">
            Send Message
          </button>
        </Container>
      </form>
      <ToastContainer />
    </div>
  );
};
