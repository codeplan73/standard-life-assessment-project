import { LuUserCircle2 } from "react-icons/lu";

const AuthorCard = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-3 md:max-w-sm font-inter">
      <div className="flex items-center justify-between w-full">
        <div className="">
          <LuUserCircle2 className="text-6xl" />
          <p className="font-semibold text-md">Bisola Bisola</p>
          <p className="text-xs">230 Followers</p>
        </div>
        <button className="px-4 py-2 text-white rounded-md bg-primary">
          Follow
        </button>
      </div>
      <p className="text-xs font-normal">
        Sharing my journey on epost at a time. Join me as I give out tidbits
        about my career and journey as a designer
      </p>
    </div>
  );
};

export default AuthorCard;
