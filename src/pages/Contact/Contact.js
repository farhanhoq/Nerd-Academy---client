import React from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_up6a2q2', 'template_gu40p0p', e.target, 'RQpbmDtuAYwO9LiSC')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    toast("Successfully sent your Email Thanks!")

  }
  return (
    <section className="flex flex-col justify-between md:items-center lg:flex-row container mx-auto px-16 dark:text-white" id="contact">
      <div className="text-center lg:text-left">
        <img
          className="w-10/12 mx-auto"
          src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1673781447~exp=1673782047~hmac=c4925cf02c78fea815b894b4393247cf7e71d96a32a1f3f2596131ec8b36c070"
          alt=""
        />
      </div>

      <div className="grid justify-between mt-10 mr-20 justify-self-center">
        <h2 className="text-center lg:text-left text-2xl font-bold">
          {" "}
          Stay Connected with us
          {" "}
        </h2>

        {/* From section */}
        <form
          onSubmit={sendEmail}
        >
          <div className="form-control mt-8">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs rounded-none "
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs rounded-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered min-w-full max-w-xs mt-6 rounded-none"
            />
            <div className="form-control mt-6">
              <textarea
                className="textarea textarea-bordered h-24 rounded-none"
                placeholder="Enter your message "
                name="message"
              ></textarea>
            </div>
          </div>

          <div className="mb-12 mt-6">
            <input
              type="submit"
              value="Send Message"
              className="btn btn-primary bg-gradient-to-r from-primary to secondary w-40 rounded-full text-white"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
