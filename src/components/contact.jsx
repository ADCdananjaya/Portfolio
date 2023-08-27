import { useState } from "react";
import Joi from "joi-browser";
import { motion } from "framer-motion";
import { textContainer, fadeIn } from "../utils/motion";
import assets from "../assets";

const Contact = () => {
  const [state, setState] = useState({
    data: { title: "", message: "" },
    errors: { title: "", message: "" },
  });

  const schema = Joi.object({
    title: Joi.string().required().min(3).max(50),
    message: Joi.string().required().min(10).max(500),
  });

  const handleClick = () => {
    const email = "chamoddananjaya49@gmail.com";
    const title = encodeURIComponent(state.data.title);
    const message = encodeURIComponent(state.data.message);
    const url = `mailto:${email}?subject=${title}&body=${message}`;
    window.location.href = url;
    setState((prev) => ({ data: { title: "", message: "" }, ...prev.errors }));
  };

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev.errors,
      data: { ...prev.data, [e.target.name]: e.target.value },
    }));
    const { error } = schema.validate(state.data);
    if (error) {
      const title = error.details[0].context.label;
      const message = error.details[0].message;
      setState((prev) => ({
        data: { ...prev.data },
        errors: {
          ...prev.errors,
          [title]: message,
        },
      }));
    }
  };

  return (
    <motion.div
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="contact"
      className="w-full h-auto items-center md:items-start lg:items-start flex flex-col gap-3 px-0 md:px-20 mt-12 font-poppins bg-lighter-gray dark:bg-navy-blue"
    >
      <motion.p
        variants={fadeIn("up", "tween", 0.1, 1)}
        className="text-4xl md:text-5xl lg:text-5xl text-navy-blue dark:text-light-gray font-semibold"
      >
        contact.
      </motion.p>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="w-full h-auto flex item center justify-center mt-5"
      >
        <div className="flex flex-row w-10/12 md:w-9/12 lg:w-9/12 h-80 bg-light-gray dark:bg-light-blue rounded-md mb-10 shadow-md">
          <div className="hidden md:flex lg:flex items-center justify-center h-full w-1/2 rounded-md">
            <img
              src={assets.contact}
              className="w-8/12 object-cover dark:hidden"
            />
            <img
              src={assets.contactDark}
              className="h-4/5 hidden object-cover dark:block"
            />
          </div>
          <div className="h-full w-full md:w-1/2 lg:w-1/2 flex flex-col gap-4 items-center justify-center py-5">
            <input
              type="text"
              name="title"
              value={state.data.title}
              onChange={handleChange}
              className="w-10/12 py-3 px-5 bg-dark-gray text-lighter-gray rounded-full shadow-md font-poppins placeholder:text-lighter-gray focus:ring-blue-400"
              placeholder="Title"
            />
            <p className="px-3 text-center font-sm italic text-red-500 dark:text-red-300">
              {state.errors && state.errors.title}
            </p>
            <textarea
              cols="30"
              rows="10"
              name="message"
              value={state.data.message}
              onChange={handleChange}
              className="w-10/12 py-3 px-5 bg-dark-gray text-lighter-gray rounded-2xl shadow-md font-poppins placeholder:text-lighter-gray"
              placeholder="Message"
            ></textarea>
            <p className="px-3 text-center font-sm italic text-red-500 dark:text-red-300">
              {state.errors && state.errors.message}
            </p>
            <button
              disabled={state.errors}
              onClick={handleClick}
              className="font-poppins font-semibold hover:enabled:opacity-90 bg-dark-gray text-lighter-gray rounded-full px-5 py-2 shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
            >
              Contact
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
