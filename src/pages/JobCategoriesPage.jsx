import SecondaryPageHeader from "../components/SecondaryPageHeader";
import CategoryList from "../components/CategoryList";

const JobCategoriesPage = () => {
  return (
    <>
      <SecondaryPageHeader>Job Categories</SecondaryPageHeader>
      <div className="min-h-[calc(100vh-575px)]">
        <CategoryList />
      </div>
    </>
  );
};

export default JobCategoriesPage;
