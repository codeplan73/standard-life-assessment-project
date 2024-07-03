import Article from "../../../components/Article";
import ArticleHeader from "../../../components/ArticleHeader";
import ArticleLikeOption from "../../../components/ArticleLikeOption";
import AuthWrapper from "../../../components/AuthWrapper";
import CommetTextBox from "../../../components/CommentTextBox";

const PreviewPostPage = () => {
  return (
    <AuthWrapper>
      <div className="container w-full px-4 mx-auto md:w-8/12">
        <ArticleHeader />
        <Article />
        <ArticleLikeOption />

        <CommetTextBox totalComment="2" />
      </div>
    </AuthWrapper>
  );
};

export default PreviewPostPage;
