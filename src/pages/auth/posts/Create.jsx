import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { CiImageOn } from "react-icons/ci";
import AuthWrapper from "../../../components/AuthWrapper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPostSchema } from "../../../schema";
import ErrorMessage from "../../../components/ErrorMessage";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   useCreatePostMutation,
//   useCreateAndPublishPostMutation,
// } from "../../../store/posts/postApiSlice";

const CreatePostPage = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const [createPost] = useCreatePostMutation();
  // const [createAndPublishPost] = useCreatePostMutation();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(createPostSchema) });

  const [isFormEdited, setIsFormEdited] = useState(false);
  const [image, setImage] = useState(null);

  const formValues = watch();

  useEffect(() => {
    const hasValue = Object.values(formValues).some(
      (value) => value && value.length > 0
    );
    setIsFormEdited(hasValue);
  }, [formValues]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log("No file selected.");
      return;
    }
    setImage(file);
  };

  const onSubmit = async (data, event) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("content", data.content);
    if (image) {
      formData.append("img_url", image);
    }

    const { id } = event.target;
    if (id === "createAndPublish") {
      try {
        // const res = await createAndPublishPost(formData);
        console.log("res");
      } catch (error) {
        console.log("Cool", error.error.data.message);
      }
    } else {
      try {
        // const res = await createPost(formData);
        console.log("res");
      } catch (error) {
        console.log("Cool", error.error.data.message);
      }
    }
  };

  return (
    <AuthWrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center justify-between">
          <Link to="/home" className="flex items-center space-x-2">
            <IoArrowBack className="text-slate-500" />
            <span className="text-slate-500">Draft</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button
              id="create"
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="px-4 py-2 rounded-md text-primary bg-slate-200"
            >
              Preview
            </button>
            <button
              id="createAndPublish"
              type="button"
              disabled={!isFormEdited}
              onClick={handleSubmit(onSubmit)}
              className={`px-4 py-2 text-white rounded-md  ${
                isFormEdited ? "bg-primary" : "bg-blue-400"
              }`}
            >
              Publish
            </button>
          </div>
        </div>

        <div className="w-full mx-auto md:w-8/12">
          <div className="flex flex-col py-12">
            <div className="flex flex-col gap-2 py-4">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="object-cover w-full h-64"
                />
              ) : (
                <div>
                  <div className="flex items-center justify-center w-full">
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={handleImageChange}
                      id="fileInput"
                      className="hidden"
                    />

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
                  <ErrorMessage>{errors.img_url?.message}</ErrorMessage>
                </div>
              )}
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
            </div>
          </div>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default CreatePostPage;
