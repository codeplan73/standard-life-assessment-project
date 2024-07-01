import AuthWrapper from "./../../components/AuthWrapper";
import { Link } from "react-router-dom";
import PostCard from "./../../components/PostCard";
import PostHeader from "../../components/PostHeader";
import PostFilter from "../../components/PostFilter";

const Homepage = () => {
  return (
    <AuthWrapper>
      <PostHeader />
      <PostFilter />
      <section>
        <div className="flex items-center justify-between pt-8 pb-4">
          <h2 className="text-xl font-semibold md:text-2xl">Your Posts</h2>
          <Link
            to="/posts/create"
            className="px-4 py-2 text-white rounded-md bg-primary"
          >
            Create New Post
          </Link>
        </div>
      </section>
      <hr className="w-full my-6 border border-slate-300" />

      <section className="flex flex-col items-start justify-start gap-2">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </AuthWrapper>
  );
};

export default Homepage;
