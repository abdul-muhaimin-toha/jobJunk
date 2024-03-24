import CategoryCard from "./CategoryCard";
import { CiBadgeDollar } from "react-icons/ci";

const CategoryList = ({ jobCategories }) => {
  return (
    <section className="mx-auto mb-4 mt-4 max-w-screen-2xl p-1">
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
        {jobCategories.map((jobCategory) => (
          <CategoryCard
            key={jobCategory.id}
            icon={<CiBadgeDollar className="text-4xl text-white" />}
            heading={jobCategory.category_name}
            subHeading={jobCategory.availability}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
