import Explore from "./Explore";
import AuthorCard from "./AuthorCard";

const ExploreWithAuthor = () => {
  return (
    <section className="w-full py-12 mt-12 bg-slate-50">
      <div className="container flex flex-col w-full px-4 mx-auto md:w-8/12 ">
        <AuthorCard />
        <Explore />
      </div>
    </section>
  );
};

export default ExploreWithAuthor;
