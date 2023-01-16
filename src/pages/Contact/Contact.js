import React from "react";

const Contact = () => {
  return (
    <section className="grid grid-cols-2 justify-items-stretch mx-8 mt-40" id="contact">
      <div className="text-center lg:text-left">
        <img
          className="w-10/12"
          src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1673781447~exp=1673782047~hmac=c4925cf02c78fea815b894b4393247cf7e71d96a32a1f3f2596131ec8b36c070"
          alt=""
        />
      </div>

      <section className="grid justify-between mt-10 mr-20">
        <h2 className="text-center lg:text-left text-2xl font-bold">
          {" "}
          Any question in mind? Don't worry
          <br /> Contact us{" "}
        </h2>
        <div className="form-control">
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs rounded-none "
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs rounded-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered min-w-full max-w-xs mt-6 rounded-none"
          />
          <div className="form-control mt-6">
            <textarea
              className="textarea textarea-bordered h-24 rounded-none"
              placeholder="Enter your message "
            ></textarea>
          </div>
        </div>

        <div className="mb-16">
          <input
            type="submit"
            value="Send Message"
            className="btn btn-primary bg-gradient-to-r from-primary to secondary w-40 rounded-full text-white"
          />
        </div>
      </section>
    </section>
  );
};

export default Contact;
