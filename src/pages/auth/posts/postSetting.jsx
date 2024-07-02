import { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import AuthWrapper from "../../../components/AuthWrapper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPostSchema } from "../../../schema";
import ErrorMessage from "../../../components/ErrorMessage";

const CreatePostPage = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  // const upload_preset = import.meta.env.VITE_CLOUDINARY_PRESET;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createPostSchema) });

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

      setImage(data.url);
    } catch (error) {
      setLoading(false);
    }
  };

  const createPost = async (data) => {
    data.img_url = image;

    console.log(data);
  };
  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit(createPost)}>
        <div className="flex items-center justify-between">
          <Link to="/home" className="flex items-center space-x-2">
            <IoArrowBack className="text-slate-500" />
            <span className="text-slate-500">Draft</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button
              id="create"
              className="px-4 py-2 rounded-md text-primary bg-slate-200"
            >
              Preview
            </button>
            <button
              id="createAndPublish"
              className="px-4 py-2 text-white rounded-md bg-primary"
            >
              Publish
            </button>
          </div>
        </div>

        <div className="w-full mx-auto md:w-8/12">
          <div className="flex flex-col py-12">
            {image ? (
              <img
                src={image && image}
                alt="Preview"
                className="object-cover w-full h-64"
              />
            ) : (
              <div className="flex items-center justify-center w-full">
                <input
                  type="file"
                  {...register("img_url")}
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleImageChange}
                  id="fileInput"
                  className="hidden"
                />
                <ErrorMessage>{errors.img_url?.message}</ErrorMessage>
                <label
                  htmlFor="fileInput"
                  className="flex items-center justify-center w-full p-4 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-form md:h-44 hover:bg-gray-100 focus-within:border-blue-500"
                >
                  <div className="flex flex-col items-center justify-center">
                    <CiImageOn className="w-12 h-12 text-gray-400" />
                    <span className="mt-2 text-sm text-gray-600">
                      Add Header Image
                    </span>
                  </div>
                </label>
              </div>
            )}

            <div className="flex flex-col gap-2 py-4">
              <input
                type="text"
                {...register("title")}
                placeholder="Title"
                className="w-full text-4xl text-black border-gray-300 rounded-md placeholder:text-black focus:outline-none focus:border-primary"
              />
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
              <input
                type="text"
                {...register("description")}
                placeholder="Add a subtitle"
                className="w-full text-sm border-gray-300 rounded-md focus:outline-none focus:border-primary"
              />
              <ErrorMessage>{errors.description?.message}</ErrorMessage>

              <Controller
                name="content"
                control={control}
                render={({ field }) => (
                  <SimpleMDE placeholder="The body of your post" {...field} />
                )}
              />
              <ErrorMessage>{errors.content?.message}</ErrorMessage>

              {/* <button
                type="submit"
                className="w-full py-4 text-white rounded-md bg-primary"
              >
                Submit
              </button> */}
            </div>
          </div>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default CreatePostPage;
