import Hero from "../components/Hero";
import CategoryList from "../components/CategoryList";
import FeaturedJobsList from "../components/FeaturedJobsList";
import SectionHeader from "../components/SectionHeader";

const Home = () => {
  return (
    <>
      <Hero />
      <SectionHeader
        title="Job Category"
        subTitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <CategoryList />
      <SectionHeader
        title="Featured Job"
        subTitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <FeaturedJobsList />
    </>
  );
};

export default Home;

// export const FeaturedJobLoader = async () => {
//   const response = await fetch("./jobs.json");
// };
