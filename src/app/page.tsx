import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";
import HomePageContent from "./components/HomePageContent";

const Page = async () => {
  const [latestQuestions, topContributers] = await Promise.all([
    LatestQuestions(),
    TopContributers(),
  ]);

  return (
    <HomePageContent
      latestQuestions={latestQuestions}
      topContributers={topContributers}
    />
  );
};

export default Page;