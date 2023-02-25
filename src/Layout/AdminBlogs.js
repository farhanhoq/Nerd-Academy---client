import JoditEditor from "jodit-react";
import React, { useState, useRef } from "react";
// import parse from 'html-react-parser';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminBlogs = () => {
  let newDate = new Date();
  let date1 = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const { register, handleSubmit, reset } = useForm();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleData = (data) => {
    const writerImage = data.writerImage[0];
    const blogImage = data.blogImage[0];

    // console.log(writerImage, blogImage);

    const formData = new FormData();
    formData.append("image", writerImage);
    formData.append("image", blogImage);

    const name = data.name;
    const title = data.title;
    const blogDetails = content;

    const url = `https://api.imgbb.com/1/upload?key=d5986639e58feec46ebdd62213f7e72e`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          const blogsData = {
            name,
            title,
            writerImage: imgData.data.url,
            blogImage: imgData.data.url,
            blogDetails,
            date: `${date1}.${month}.${year}`,
          };

          console.log(blogsData);

          fetch(`https://nerd-academy-server.vercel.app/blog`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(blogsData),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success("Blog Published");
              reset();
              navigate("/blogs/");
            });
        }
      });
  };

  return (
    <div className="py-12">
      <h2 className="text-3xl mb-2">Write your blog</h2>
      <form
        onSubmit={handleSubmit(handleData)}
        className="card bg-base-100 shadow-xl dark:bg-accent dark:text-white dark:border dark:border-secondary"
      >
        <div className="card-body">
          <div>
            <p className="text-sm">Author Name</p>
            <input
              {...register("name")}
              type="text"
              placeholder="Writer Name"
              className="mt-2 input input-bordered w-full max-w-xs dark:bg-accent dark:text-white dark:border dark:border-secondary"
            />
          </div>
          <div className="my-2">
            <p className="text-sm">Blog Title</p>
            <input
              {...register("title")}
              type="text"
              placeholder="Blog Title"
              className="mt-2 input input-bordered w-full  dark:bg-accent dark:text-white dark:border dark:border-secondary"
            />
          </div>
          <div className="flex w-full">
            <div
              className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center
            dark:bg-accent dark:text-white dark:border dark:border-secondary"
            >
              <p>Author Image</p>
              <input
                {...register("writerImage")}
                type="file"
                className="file-input file-input-ghost w-full max-w-xs dark:bg-accent dark:text-white dark:border dark:border-secondary"
              />
            </div>
            <div className="divider divider-horizontal">AND</div>
            <div
              className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center 
            dark:bg-accent dark:text-white dark:border dark:border-secondary"
            >
              <p>Blog Image</p>
              <input
                {...register("blogImage")}
                type="file"
                className="file-input file-input-ghost w-full max-w-xs dark:bg-accent dark:text-white 
                dark:border dark:border-secondary"
              />
            </div>
          </div>
          <div className="mt-3">
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => setContent(newContent)}
            />
          </div>
          <div className="card-actions">
            <button
              className="btn border-none bg-gradient-to-r from-primary to-secondary mt-6 mb-4 w-1/2 text-center mx-auto text-white"
              type="submit"
            >
              Publish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminBlogs;
