import ArticleHeader from "../../../components/ArticleHeader";
import AuthWrapper from "../../../components/AuthWrapper";
// import { Link } from "react-router-dom";

const PreviewPostPage = () => {
  return (
    <AuthWrapper>
      <div className="container w-full mx-auto md:w-8/12">
        <ArticleHeader />
      </div>
    </AuthWrapper>
  );
};

export default PreviewPostPage;
