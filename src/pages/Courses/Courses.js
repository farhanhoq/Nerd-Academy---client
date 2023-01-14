import React from "react";
import minus from "../../Assets/minus.png";
import book from "../../Assets/book.png";

const Courses = () => {
  return (
    <div className="my-20 container mx-auto px-16">
      <h1 className="text-5xl text-center font-bold ">Trending</h1>
      <div className="grid justify-center ">
        <img className="h-full w-24" src={minus} alt="" srcset="" />
        <img className="w-12 mx-auto" src={book} alt="" srcset="" />
      </div>

      <div className="grid grid-rows-3 gap-4 my-10 mx-8 text-center">
        <div className="h-56 bg-slate-50 ring ring-primary ring-offset-zinc-300 rounded-xl">
          <div className=" flex">
            <img
              src="https://placeimg.com/260/400/arch"
              className="rounded-tr-xl shadow-2xl h-56 w-1/2"
              alt=""
            />
            <div className="col-span-2 mr-24 my-6">
              <div className="text-end">
                <p className="py-6 ml-7 ">
                  We are experts in helping organisations leverage coaching to
                  drive engagement, performance organisations leverage coaching
                  to drive engagement, performance and We are experts in helping
                  organisations leverage coaching to drive engagement,
                  performance organisations leverage coaching to drive
                  engagement, performance{" "}
                </p>
              </div>

              <div className="card-actions justify-end mt-2 mr-7">
                <button className="bg-primary rounded-t-none rounded-b-none rounded-l-lg text-lg p-2 text-white">
                  120$
                </button>
                <button className="rounded-r-xl bg-primary text-white text-lg p-2 ring-offset-2">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-56 bg-slate-50 ring ring-primary ring-offset-zinc-300 rounded-xl">
          <div className=" flex flex-row-reverse">
            <img
              src="https://placeimg.com/260/400/arch"
              className="rounded-tr-xl shadow-2xl h-56 w-1/2"
              alt=""
            />
            <div className="col-span-2 mr-24 my-6">
              <div className="text-start">
                <p className="py-6 ml-7 ">
                  We are experts in helping organisations leverage coaching to
                  drive engagement, performance organisations leverage coaching
                  to drive engagement, performance and We are experts in helping
                  organisations leverage coaching to drive engagement,
                  performance organisations leverage coaching to drive
                  engagement, performance{" "}
                </p>
              </div>

              <div className="card-actions justify-start mt-2 ml-7">
                <button className="bg-primary rounded-t-none rounded-b-none rounded-l-lg text-lg p-2 text-white">
                  160$
                </button>
                <button className="rounded-r-xl bg-primary text-white text-lg p-2 ring-offset-2">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-56 bg-slate-50 ring ring-primary ring-offset-zinc-300 rounded-xl">
          <div className=" flex">
            <img
              src="https://placeimg.com/260/400/arch"
              className="rounded-tr-xl shadow-2xl h-56 w-1/2"
              alt=""
            />
            <div className="col-span-2 mr-24 my-6">
              <div className="text-end">
                <p className="py-6 ml-7 ">
                  We are experts in helping organisations leverage coaching to
                  drive engagement, performance organisations leverage coaching
                  to drive engagement, performance and We are experts in helping
                  organisations leverage coaching to drive engagement,
                  performance organisations leverage coaching to drive
                  engagement, performance{" "}
                </p>
              </div>

              <div className="card-actions justify-end mt-2 ml-7">
                <button className="bg-primary rounded-t-none rounded-b-none rounded-l-lg text-lg p-2 text-white">
                  160$
                </button>
                <button className="rounded-r-xl bg-primary text-white text-lg p-2 ring-offset-2">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-56 bg-slate-50 ring ring-primary ring-offset-zinc-300 rounded-xl">
          <div className=" flex flex-row-reverse">
            <img
              src="https://placeimg.com/260/400/arch"
              className="rounded-tr-xl shadow-2xl h-56 w-1/2"
              alt=""
            />
            <div className="col-span-2 mr-24 my-6">
              <div className="text-start">
                <p className="py-6 ml-7 ">
                  We are experts in helping organisations leverage coaching to
                  drive engagement, performance organisations leverage coaching
                  to drive engagement, performance and We are experts in helping
                  organisations leverage coaching to drive engagement,
                  performance organisations leverage coaching to drive
                  engagement, performance{" "}
                </p>
              </div>

              <div className="card-actions justify-start mt-2 ml-7">
                <button className="bg-primary rounded-t-none rounded-b-none rounded-l-lg text-lg p-2 text-white">
                  160$
                </button>
                <button className="rounded-r-xl bg-primary text-white text-lg p-2 ring-offset-2">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
