import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";

const PostFilter = () => {
  return (
    <div className="flex flex-col-reverse items-start gap-4 pt-8 md:items-center md:justify-between md:flex-row">
      <div className="flex items-center justify-start gap-4">
        <p className="text-slate-500 text-md">Published (4)</p>
        <p className="text-slate-500 text-md">Draft</p>
        <p className="text-slate-500 text-md">Scheduled</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative flex">
          <input
            type="text"
            className="py-2 pl-8 border rounded-md w-52 border-slate-500 md:w-64"
            placeholder="Search"
          />
          <CiSearch className="absolute text-2xl font-bold text-slate-500 top-[10px] left-2" />
        </div>
        <div className="flex items-center">
          <CiFilter className="text-2xl" />
          <span className="text-slate-500">Filter:</span>

          <select className="py-2 rounded-md group border-slate-500">
            <option value="all">Recent</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PostFilter;
