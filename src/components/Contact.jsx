import { useState } from "react";
import { toast } from "react-hot-toast";
import me from "../assets/me.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  const [input, setInput] = useState({ name: "", email: "", message: "" });

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({ ...input, [name]: value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(input);
    toast.success("Message Sent");
    
    setInput({ name: "", email: "", message: "" })
  };

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0
      },
      whileInView: {
        x: 0,
        opacity: 1
      }
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0
      },
      whileInView: {
        y: 0,
        opacity: 1
      },
      transition: {
        delay: 0.5
      },
    },
  }
  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandle} {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={input.name}
            onChange={changeHandler}
            name='name'
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Your Email"
            required
            value={input.email}
            onChange={changeHandler}
            name='email'
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Your Message"
            required
            value={input.message}
            onChange={changeHandler}
            name='message'
            autoComplete="off"
          />

          <motion.button type="submit" {...animations.button}>Submit</motion.button>
        </motion.form>
      </section>

      <aside>
        <img src={me} alt="graphics" />
      </aside>
    </div>
  );
};

export default Contact;
