import Article from "../../../components/post/Article";
import ArticleHeader from "../../../components/post/ArticleHeader";
import ArticleLikeOption from "../../../components/post/ArticleLikeOption";
import AuthWrapper from "../../../components/AuthWrapper";
import CommetTextBox from "../../../components/comments/CommentTextBox";
import Comment from "../../../components/comments/Comment";

const PreviewPostPage = () => {
  return (
    <AuthWrapper>
      <div className="container w-full px-4 mx-auto md:w-8/12">
        <ArticleHeader />
        <Article />
        <ArticleLikeOption />

        <CommetTextBox totalComment="2" />
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
    </AuthWrapper>
  );
};

export default PreviewPostPage;
