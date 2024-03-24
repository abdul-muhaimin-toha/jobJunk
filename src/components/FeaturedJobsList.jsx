import { useEffect, useState } from "react";
import FeaturedJobCard from "./FeaturedJobCard";

const FeaturedJobsList = ({ featuredJobs }) => {
  const [totalVisibleItems, setTotalVisibleItems] = useState(4);

  return (
    <section
      id="featuredJobList"
      className=" mx-auto mb-16 mt-4 max-w-screen-2xl p-1 "
    >
      <div className=" grid grid-cols-1 gap-6 px-4 md:grid-cols-2">
        {featuredJobs.slice(0, totalVisibleItems).map((featuredJob) => (
          <FeaturedJobCard featuredJob={featuredJob} key={featuredJob.id} />
        ))}
      </div>

      <div
        className={`${totalVisibleItems === featuredJobs.length && "hidden"}  mt-8 flex items-center justify-center`}
      >
        <button
          onClick={() => setTotalVisibleItems(featuredJobs.length)}
          className=" btn rounded-md border-none bg-primary text-white hover:bg-primary hover:bg-opacity-95"
        >
          See All Jobs
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobsList;
