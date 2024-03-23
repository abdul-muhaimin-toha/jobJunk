import FeaturedJobCard from "./FeaturedJobCard";
import SectionHeader from "./SectionHeader";

const FeaturedJobsList = () => {
  return (
    <section className="mx-auto mb-4 max-w-screen-2xl p-1">
      <SectionHeader
        title="Featured Job"
        subTitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2">
        <FeaturedJobCard />
        <FeaturedJobCard />
        <FeaturedJobCard />
        <FeaturedJobCard />
      </div>
      <div className="mt-8 flex items-center justify-center">
        <a className=" btn rounded-md border-none bg-primary text-white hover:bg-primary hover:bg-opacity-95">
          See All Jobs
        </a>
      </div>
    </section>
  );
};

export default FeaturedJobsList;
