import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";

const CreatePostPage = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  // const upload_preset = import.meta.env.VITE_CLOUDINARY_PRESET;

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log("No file selected.");
      return;
    }

    // setProfileImage(file);
    // setImagePreview(URL.createObjectURL(file));

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "codeplan73");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/ddogq4ll7/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log("Image URL: ", data.url);
      setImage(data.url);
    } catch (error) {
      setLoading(false);
      console.error("Upload error: ", error);
    }
  };
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <Link to="/home" className="flex items-center space-x-2">
          <IoArrowBack className="text-slate-500" />
          <span className="text-slate-500">Draft</span>
        </Link>
        <div className="flex items-center space-x-4">
          <button
            disabled={disabled}
            className="px-4 py-2 rounded-md text-primary bg-slate-200"
          >
            Preview
          </button>
          <button
            disabled={disabled}
            className="px-4 py-2 text-white rounded-md bg-primary"
          >
            Publish
          </button>
        </div>
      </div>

      <div className="w-full mx-auto md:w-8/12">
        <form className="flex flex-col">
          <div className="p-5 mt-5 bg-white w-25">
            <input
              type="file"
              name="image"
              accept="image/png, images/jpeg, image/jpg"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit">Upload image</button>
        </form>

        <div>
          {image && (
            <img
              src={image && image}
              alt="Preview"
              className="object-cover w-full h-64"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
