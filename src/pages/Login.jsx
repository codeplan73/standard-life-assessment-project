import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputWrapper from "../components/InputWrapper";
import Label from "../components/Label";
import { loginSchema } from "../schema";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setCredentials } from "../store/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "./../store/auth/userApiSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const { token } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [navigate, token]);

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      dispatch(setCredentials(res.data.token));
    } catch (error) {
      console.log("Error: ", error);

      toast.error(error?.data?.message);
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
          Welcome Back
        </h2>
        <p className="font-sans text-sm md:text-ml text-slate-500">
          Please enter your details
        </p>
      </header>

      <div className="flex flex-col items-center w-full gap-2 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-4"
        >
          <InputWrapper>
            <Label id="email" label="Email" />
            <input
              {...register("email")}
              type="email"
              disabled={isLoading}
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
            <Label id="password" label="password" />
            <input
              {...register("password")}
              type="password"
              disabled={isLoading}
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
            <div className="space-x-2 text-grayTwo">
              <input type="checkbox" name="" id="" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <Link className="font-semibold text-primary" to="/forgotpassword">
              Forgot Password
            </Link>
          </InputWrapper>

          <button
            disabled={isLoading}
            className={
              isLoading
                ? "w-full p-3 rounded-md text-grayTwo bg-slate-200 cursor-not-allowed"
                : "w-full p-3 rounded-md text-white bg-primary"
            }
          >
            {isLoading ? "Loading" : "Login"}
          </button>
        </form>
        <p className="text-grayTwo">
          {` Don't have an account? `}
          <Link className="text-primary" to="/register">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
