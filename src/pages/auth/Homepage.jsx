import AuthWrapper from "./../../components/AuthWrapper";
import { Link } from "react-router-dom";
import PostCard from "./../../components/post/PostCard";
import PostHeader from "../../components/post/PostHeader";
import PostFilter from "../../components/post/PostFilter";
import SectionWrapper from "../../components/SectionWrapper";

const Homepage = () => {
  return (
    <AuthWrapper>
      <SectionWrapper>
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
      </SectionWrapper>
    </AuthWrapper>
  );
};

export default Homepage;
