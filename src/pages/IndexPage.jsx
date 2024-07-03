import { Navbar, Footer } from "../components";
import ArticleHeader from "../components/post/ArticleHeader";
import Article from "../components/post/Article";
import ArticleLikeOption from "../components/post/ArticleLikeOption";
import CommentTextBox from "../components/comments/CommentTextBox";
import Comment from "../components/comments/Comment";
import ExploreWithAuthor from "../components/ExploreWithAuthor";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col w-full px-4 mx-auto md:w-8/12">
        <ArticleHeader />
        <Article />
        <ArticleLikeOption />

        <CommentTextBox totalComment="2" />
        <Comment
          name="Bisola Bisola"
          date="2 weeks ago"
          text="This was a very insightful post. As someone who is new to the design
          industry, it offers insight to basic expose in a very soft way, Thank
          you"
        />
        <Comment
          name="Tanitoluwa Adams"
          date="2 weeks ago"
          text="This was a very insightful post. As someone who is new to the design
          industry, it offers insight to basic expose in a very soft way, Thank
          you"
        />
      </div>
      <ExploreWithAuthor />
      <Footer />
    </>
  );
};

export default IndexPage;
