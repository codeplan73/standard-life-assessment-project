import PropTypes from "prop-types";
import { LuDot } from "react-icons/lu";

const ExploreCard = ({ cardImage, title, text, date, minRead }) => {
  return (
    <div className="flex flex-col items-start max-w-xs gap-1">
      <img
        src={cardImage}
        alt="explore-card-image"
        className="w-full h-40 rounded-md"
      />
      <h4 className="text-xl font-semibold leading-6 tracking-wide font-inter line-clamp-1">
        {title}
      </h4>
      <p className="text-sm text-slate-500 font-inter">{text}</p>
      <div className="flex items-center leading-none text-slate-500">
        <p className="text-xs">{date}</p>
        <LuDot className="text-2xl" />
        <p className="text-xs"> {minRead}</p>
      </div>
    </div>
  );
};

ExploreCard.propTypes = {
  cardImage: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
  minRead: PropTypes.node.isRequired,
};

export default ExploreCard;
