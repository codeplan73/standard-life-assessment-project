import { LuUserCircle2 } from "react-icons/lu";
import PropTypes from "prop-types";

const CommentTextBox = ({ totalComment }) => {
  return (
    <div className="flex flex-col items-start gap-4 mb-4 justify-starts font-inter">
      <h2 className="mt-8 text-2xl font-semibold">{totalComment} Comments</h2>
      <div className="flex items-center space-x-2">
        <LuUserCircle2 className="text-4xl" />
        <p className="text-sm">Bisola Bisola</p>
      </div>
      <textarea
        placeholder="write a comment..."
        className="w-full p-3 border rounded-md md:w-6/12 md:h-24 border-slate-300"
      ></textarea>
    </div>
  );
};

CommentTextBox.propTypes = {
  totalComment: PropTypes.node,
};

export default CommentTextBox;
