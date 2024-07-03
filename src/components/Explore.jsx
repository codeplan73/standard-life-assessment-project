import cardImageOne from "../assets/img/article-card-1.jpeg";
import cardImageTwo from "../assets/img/article-card-2.jpeg";
import cardImageThree from "../assets/img/article-card-3.png";
import ExploreCard from "./ExploreCard";

const Explore = () => {
  return (
    <div className="flex flex-col gap-6 py-4 mt-12">
      <h3 className="text-xl font-bold md:text-2xl font-inter">Explore more</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <ExploreCard
          cardImage={cardImageOne}
          title=" Colors Scheme in design"
          text="A story of adventure with colors wheels and schemes"
          date="Apr 16, 2024 "
          minRead="4 min read"
        />
        <ExploreCard
          cardImage={cardImageTwo}
          title=" Colors Scheme in design"
          text="A story of adventure with colors wheels and schemes"
          date="Apr 16, 2024 "
          minRead="4 min read"
        />
        <ExploreCard
          cardImage={cardImageThree}
          title=" Colors Scheme in design"
          text="A story of adventure with colors wheels and schemes"
          date="Apr 16, 2024 "
          minRead="4 min read"
        />
      </div>
    </div>
  );
};

export default Explore;
