import { useState } from "react";
import { LuUserCircle2 } from "react-icons/lu";
import { FaRegHeart, FaRegComment } from "react-icons/fa6";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Comment = ({ name, date, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-start justify-start gap-4 py-3">
      <div className="flex items-center space-x-2">
        <LuUserCircle2 className="text-4xl" />
        <div>
          <p className="text-sm">{name}</p>
          <p className="text-xs text-slate-400">{date}</p>
        </div>
      </div>

      <div className="flex flex-col w-full gap-3 md:w-9/12 font-inter ">
        <p className="text-sm">{text}</p>
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center space-x-1">
              <button className="cursor-pointer hover:text-primary">
                <FaRegHeart className="text-sm" />
              </button>
              <span className="text-sm">0</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaRegComment className="text-sm hover:cursor-pointer" />
              <span className="text-sm">reply</span>
            </div>
          </div>
          <div className="relative flex items-start gap-4 pr-8">
            <BiDotsHorizontalRounded
              onClick={() => setIsOpen(!isOpen)}
              className=""
            />

            {isOpen && (
              <div className="absolute z-50 flex flex-col w-40 gap-2 py-2 mt-1 bg-white rounded-md shadow-lg right-8 top-4 drop-shadow-lg">
                <Link to="#" className="block px-4 text-red-500">
                  Delete Comment
                </Link>
                <Link to="#" className="block px-4 text-red-500">
                  Report User
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  name: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
};

export default Comment;
