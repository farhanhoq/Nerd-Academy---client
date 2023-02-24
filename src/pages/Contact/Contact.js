import React from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";
import contact from "../../Assets/contact.png"

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
    <section className="flex flex-col md:items-center lg:flex-row container mx-auto md:px-16 dark:text-white" id="contact">
      <div className="text-center lg:text-left basis-2/4 mx-5">
        <img
          className="hue-rotate-0 justify-center rounded-md shadow-gray-400 mb-6 w-full"
          src={contact}
          alt=""
        />
      </div>

      <div className="grid justify-between mt-10 mx-5 justify-self-center">
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
              <input type="text" placeholder="Name" className="input input-bordered input-primary 
              dark:bg-accent w-full max-w-xs rounded-none " />
              <input type="email" name="email" placeholder="Email" className="input input-bordered
              dark:bg-accent input-primary w-full max-w-xs rounded-none" />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="input input-bordered 
            dark:bg-accent input-primary min-w-full max-w-xs mt-6 rounded-none" />
            <div className="form-control mt-6">
              <textarea className="textarea textarea-bordered textarea-primary h-24 dark:bg-accent rounded-none"
                placeholder="Enter your message "
                name="message"
              ></textarea>
            </div>
          </div>

          <div className="mb-12 mt-6">
            <input
              type="submit"
              value="Send Message"
              className="btn bg-gradient-to-r from-primary to-secondary 
              w-40 rounded-full text-white border-none"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
