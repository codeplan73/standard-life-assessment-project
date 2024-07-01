import { TiArrowForwardOutline } from "react-icons/ti";
import { BsDot } from "react-icons/bs";
import logoImg from "../assets/img/logo.webp";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";

const PostCard = () => {
  return (
    <>
      <div className="flex justify-between md:items-center">
        <div className="flex items-start gap-4 md:w-7/12">
          <img
            src={logoImg}
            alt="profile"
            className="w-32 rounded-md md:h-32 aspect-auto"
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold md:text-2xl">Post Title</h4>
            <p className="text-slate-500 font-inter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              esse impedit fugiat, dolor repellat accusamus deserunt ut dolore
              suscipit cupiditate.
            </p>
            <div className="flex items-center space-x-1">
              <p className="text-slate-500">Apr 13, 2024</p>
              <BsDot />
              <p className="text-slate-500">4 min reads</p>
              <BsDot />
              <Link className="text-slate-500" to="/posts/show">
                <TiArrowForwardOutline className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-col items-center hidden md:flex">
            <h4 className="text-md semibold">14</h4>
            <p className="text-xs text-slate-500">Opened</p>
          </div>
          <div className="flex-col items-center hidden md:flex">
            <h4 className="text-md semibold">10</h4>
            <p className="text-xs text-slate-500">Reads</p>
          </div>
          <div className="flex-col items-center hidden md:flex">
            <h4 className="text-md semibold">2</h4>
            <p className="text-xs text-slate-500">New Subs</p>
          </div>
          <button className="cursor-pointer">
            <BsThreeDots />
          </button>
        </div>
      </div>
      <hr className="w-full my-6 border border-slate-200" />
    </>
  );
};

export default PostCard;
