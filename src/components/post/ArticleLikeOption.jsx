import { useState } from "react";
import { FaRegHeart, FaRegComment } from "react-icons/fa6";
import { RiShareForwardLine } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const ArticleLikeOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <hr className="w-full mt-8 border border-slate-300" />
      <div className="flex items-center justify-between w-full py-2">
        <div className="flex items-start gap-4">
          <div className="flex items-center space-x-1">
            <FaRegHeart className="" />
            <span>0</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaRegComment className="" />
            <span>0</span>
          </div>
        </div>
        <div className="relative flex items-start gap-4">
          <RiShareForwardLine className="" />
          <BiDotsHorizontalRounded
            onClick={() => setIsOpen(!isOpen)}
            className=""
          />

          {isOpen && (
            <div className="absolute right-0 z-50 flex flex-col gap-2 py-2 mt-1 bg-white rounded-md shadow-lg top-4 w-36 drop-shadow-lg">
              <Link to="#" className="block px-4 text-gray-800">
                Edit story
              </Link>
              <Link to="#" className="block px-4 text-gray-800">
                Hide replies
              </Link>
              <Link to="#" className="block px-4 text-red-600">
                Delete story
              </Link>
            </div>
          )}
        </div>
      </div>
      <hr className="w-full border border-slate-300" />
    </>
  );
};

export default ArticleLikeOption;
