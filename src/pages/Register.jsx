import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputWrapper from "../components/form/InputWrapper";
import Label from "../components/form/Label";
import { schema } from "./../schema";
import { useSelector } from "react-redux";
import { useRegisterUserMutation } from "./../store/auth/userApiSlice";
import { toast } from "react-toastify";

const Register = () => {
  const { token } = useSelector((state) => state.auth);
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [buttonDisable, setButtonDisable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [navigate, token]);

  const password = watch("password");

  useEffect(() => {
    const inputFields = document.querySelectorAll("input");

    return inputFields.forEach((input) => {
      input.addEventListener("focus", () => setButtonDisable(false));
    });
  }, []);

  useEffect(() => {
    const passwordCriteria = {
      minLength: password?.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
    };

    const criteriaCheckboxes = document.querySelectorAll("input[type='radio']");
    criteriaCheckboxes.forEach((checkbox, index) => {
      switch (index) {
        case 0:
          checkbox.checked = passwordCriteria.minLength;
          break;
        case 1:
          checkbox.checked =
            passwordCriteria.uppercase && passwordCriteria.lowercase;
          break;
        case 2:
          checkbox.checked = passwordCriteria.specialChar;
          break;
        case 3:
          checkbox.checked = passwordCriteria.number;
          break;
        default:
          break;
      }
    });
  }, [password]);

  const onSubmit = async (data) => {
    try {
      const res = await registerUser(data).unwrap();
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message?.errors.email[0] || error.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 px-4 py-12 mx-auto md:w-6/12 lg:w-4/12">
      <header className="flex flex-col items-center gap-2">
        <Link to="/">
          <h4 className="font-sans text-xl font-extrabold md:text-xl text-primary">
            D-Blog
          </h4>
        </Link>
        <h2
          style={{ fontWeight: 900 }}
          className="font-sans text-2xl font-bold text-black md:text-3xl"
        >
          Create an account
        </h2>
        <p className="font-sans text-sm md:text-ml text-slate-500">
          Post, manage your blogs, Keep up with audience
        </p>
      </header>

      <div className="flex flex-col items-center w-full gap-2 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-2"
        >
          <InputWrapper>
            <Label id="fullname" label="Fullname" />
            <input
              {...register("full_name")}
              type="text"
              className={`px-2 py-2 border rounded-md ${
                errors.full_name ? " border-red-400" : " border-slate-400"
              } `}
              placeholder="Enter Fullname"
            />
            <p className="text-xs text-red-600 font-extralight">
              {errors.fullname?.message}
            </p>
          </InputWrapper>
          <InputWrapper>
            <Label id="email" label="Email" />
            <input
              {...register("email")}
              type="email"
              placeholder="Enter email address"
              className={`px-2 py-2 border rounded-md border-slate-400"
              placeholder="Enter email address${
                errors.email ? " border-red-400" : " border-slate-400"
              }`}
            />
            <p className="text-xs text-red-600 font-extralight">
              {errors.email?.message}
            </p>
          </InputWrapper>
          <InputWrapper>
            <Label id="password" label="Create password" />
            <input
              {...register("password")}
              type="password"
              className={`px-2 py-2 border rounded-md border-slate-400 ${
                errors.password ? " border-red-400" : " border-slate-400"
              }`}
              placeholder="Enter password"
            />
            <p className="text-xs text-red-600 font-extralight">
              {errors.password?.message}
            </p>
          </InputWrapper>
          <InputWrapper>
            <Label id="passwordConfirmation" label="Password confirmation" />
            <input
              type="password"
              {...register("passwordConfirmation")}
              className={`px-2 py-2 border rounded-md border-slate-400 ${
                errors.passwordConfirmation
                  ? " border-red-400"
                  : " border-slate-400"
              }`}
              placeholder="Enter password"
            />
            <p className="text-xs text-red-600 font-extralight">
              {errors.passwordConfirmation?.message}
            </p>
          </InputWrapper>
          <InputWrapper>
            <div className="flex flex-col justify-between w-full gap-2 md:flex-row">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1 ">
                  <input type="radio" name="" id="" />
                  <label htmlFor="" className="text-xs text-start text-grayTwo">
                    At least 8 Characters
                  </label>
                </div>
                <div className="flex items-center gap-1">
                  <input type="radio" name="" id="" />
                  <label htmlFor="" className="text-xs text-start text-grayTwo">
                    Uppercase and Lowercase
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1 ">
                  <input type="radio" name="" id="" />
                  <label htmlFor="" className="text-xs text-start text-grayTwo">
                    At least one special character
                  </label>
                </div>
                <div className="flex items-center gap-1">
                  <input type="radio" name="" id="" />
                  <label htmlFor="" className="text-xs text-start text-grayTwo">
                    At least a number
                  </label>
                </div>
              </div>
            </div>
          </InputWrapper>
          <button
            disabled={buttonDisable || isLoading}
            className={
              buttonDisable || isLoading
                ? "w-full p-3 rounded-md text-grayTwo bg-slate-200 cursor-not-allowed"
                : "w-full p-3 rounded-md text-white bg-primary"
            }
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <p className="text-grayTwo">
          Already have an account?{" "}
          <Link className="text-primary" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
