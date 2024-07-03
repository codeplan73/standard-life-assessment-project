import { LuUserCircle2 } from "react-icons/lu";
import { LuDot } from "react-icons/lu";
import ArticleLikeOption from "./ArticleLikeOption";

const ArticleHeader = () => {
  return (
    <header className="flex flex-col items-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold tracking-wide text-center md:text-4xl">
          Introduction to UI/UX
        </h2>
        <p className="text-sm text-center text-grayTwo">
          A look into the tech career that has sent Nigeria into the tech space
        </p>
        <div className="flex items-center justify-center gap-2">
          <LuUserCircle2 className="text-4xl" />
          <div className="flex flex-col items-start ">
            <p className="text-sm font-semibold">Bisola Bisola</p>
            <div className="flex items-center -space-y-1 leading-none text-slate-500">
              <p className="text-xs">Apr 16, 2024</p>
              <LuDot className="text-2xl" />
              <p className="text-xs">4 min read</p>
            </div>
          </div>
        </div>
      </div>
      <ArticleLikeOption />
    </header>
  );
};

export default ArticleHeader;
