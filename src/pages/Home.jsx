import Hero from "../components/Hero";
import CategoryList from "../components/CategoryList";
import FeaturedJobsList from "../components/FeaturedJobsList";
import SectionHeader from "../components/SectionHeader";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { featuredJobs, jobCategories } = useLoaderData();

  return (
    <>
      <Hero />
      <SectionHeader
        title="Job Category"
        subTitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <CategoryList jobCategories={jobCategories} />
      <SectionHeader
        title="Featured Job"
        subTitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <FeaturedJobsList featuredJobs={featuredJobs} />
    </>
  );
};

export default Home;

export const FeaturedJobsAndCategoriesLoader = async () => {
  const [c, j] = await Promise.all([
    fetch("./categories.json"),
    fetch("./jobs.json"),
  ]);
  const jobCategories = await c.json();
  const featuredJobs = await j.json();
  return { jobCategories, featuredJobs };
};
