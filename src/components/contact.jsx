import { useState } from "react";
import Joi from "joi-browser";
import assets from "../assets";
import { data } from "autoprefixer";

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
    <div
      id="contact"
      className="w-full h-auto items-center md:items-start lg:items-start flex flex-col gap-3 px-20 mt-12 font-poppins"
    >
      <p className="text-4xl md:text-5xl lg:text-5xl text-blue-950 font-semibold">
        contact.
      </p>
      <div className="w-full h-auto flex item center justify-center mt-5">
        <div className="flex flex-row w-full md:w-9/12 lg:w-9/12 h-80 bg-gray-100 rounded-md mb-10 shadow-md">
          <div className="hidden md:flex lg:flex items-center justify-center h-full w-1/2 bg-gray-200 rounded-md">
            <img src={assets.contact} className="object-cover" />
          </div>
          <div className="h-full w-full md:w-1/2 lg:w-1/2 flex flex-col gap-4 items-center justify-center py-5">
            <input
              type="text"
              name="title"
              value={state.data.title}
              onChange={handleChange}
              className="w-10/12 py-3 px-5 rounded-full shadow-md font-poppins"
              placeholder="Title"
            />
            <p className="px-3 text-center font-sm italic text-red-500">
              {state.errors && state.errors.title}
            </p>
            <textarea
              cols="30"
              rows="10"
              name="message"
              value={state.data.message}
              onChange={handleChange}
              className="w-10/12 py-3 px-5 rounded-2xl shadow-md font-poppins"
              placeholder="Message"
            ></textarea>
            <p className="px-3 text-center font-sm italic text-red-500">
              {state.errors && state.errors.message}
            </p>
            <button
              disabled={state.errors}
              onClick={handleClick}
              className="font-poppins font-semibold hover:enabled:bg-gray-50 bg-white rounded-full px-5 py-2 shadow-md disabled:opacity-75 disabled:cursor-not-allowed "
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
