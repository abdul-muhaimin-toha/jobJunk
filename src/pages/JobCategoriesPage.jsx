import SecondaryPageHeader from "../components/SecondaryPageHeader";
import CategoryList from "../components/CategoryList";
import { useLoaderData } from "react-router-dom";

const JobCategoriesPage = () => {
  const jobCategories = useLoaderData();
  return (
    <>
      <SecondaryPageHeader>Job Categories</SecondaryPageHeader>
      <div className="min-h-[calc(100vh-575px)]">
        <CategoryList jobCategories={jobCategories} />
      </div>
    </>
  );
};

export default JobCategoriesPage;

export const JobCategoriesLoader = async () => {
  const response = await fetch("/categories.json");
  return response.json();
};
