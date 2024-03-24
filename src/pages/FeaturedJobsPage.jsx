import SecondaryPageHeader from "../components/SecondaryPageHeader";
import FeaturedJobsList from "../components/FeaturedJobsList";
import { useLoaderData } from "react-router-dom";

const FeaturedJobsPage = () => {
  const featuredJobs = useLoaderData();
  return (
    <>
      <SecondaryPageHeader>Featured Jobs</SecondaryPageHeader>
      <FeaturedJobsList featuredJobs={featuredJobs} />
    </>
  );
};

export default FeaturedJobsPage;

export const FeaturedJobsLoader = async () => {
  const response = await fetch("/jobs.json");
  return response.json();
};
