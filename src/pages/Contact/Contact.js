import React from "react";

const Contact = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 justify-around items-center mt-40 px-16" id="contact">
      <div className="text-center lg:text-left">
        <img
          className="w-11/12"
          src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1673781447~exp=1673782047~hmac=c4925cf02c78fea815b894b4393247cf7e71d96a32a1f3f2596131ec8b36c070"
          alt=""
        />
      </div>

      <div className="flex flex-col  mr-20 justify-self-center">
        <h2 className="mb-6 text-center lg:text-left text-2xl font-bold">
          {" "}
          Stay Connected with us
          {" "}
        </h2>

<<<<<<< HEAD
        {/* From section */}
        <form
          action="https://formspree.io/f/mzbqzjbb"
          method="POST"
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
=======
        <div className="mb-16">
          <input
            type="submit"
            value="Send Message"
            className="mt-6 btn btn-primary bg-gradient-to-r from-primary to secondary w-40 rounded-full text-white"
          />
        </div>
>>>>>>> 09f1d921d321c9245629d54b36565e6b93e1d96d
      </div>
    </section>
  );
};

export default Contact;
