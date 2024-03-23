import CategoryCard from "./CategoryCard";
import SectionHeader from "./SectionHeader";
import { CiBadgeDollar, CiPen, CiReceipt, CiRouter } from "react-icons/ci";

const CategoryList = () => {
  return (
    <section className="mx-auto mb-4 max-w-screen-2xl p-1">
      <SectionHeader
        title="Job Category List"
        subTitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
        <CategoryCard
          icon={<CiBadgeDollar className="text-4xl text-primary" />}
          heading="Account & Finance"
          subHeading="300 Jobs Available"
        />
        <CategoryCard
          icon={<CiPen className="text-4xl text-primary" />}
          heading="Creative Design"
          subHeading="100 Jobs Available"
        />
        <CategoryCard
          icon={<CiReceipt className="text-4xl text-primary" />}
          heading="Marketing & Sales"
          subHeading="150 Jobs Available"
        />
        <CategoryCard
          icon={<CiRouter className="text-4xl text-primary" />}
          heading="Engineering Job"
          subHeading="224 Jobs Available"
        />
      </div>
    </section>
  );
};

export default CategoryList;
