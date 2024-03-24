import { useEffect, useState } from "react";
import { getAppliedJobsFromLocalStorage } from "../utils/localStorage";
import AppliedJobsCard from "./AppliedJobsCard";
import { IoIosArrowDropdown } from "react-icons/io";

const AppliedJobs = ({ allJobs }) => {
  const [allAppliedJobs, setAllAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const appliedJobsId = getAppliedJobsFromLocalStorage();
    const appliedJobs = allJobs.filter((job) => appliedJobsId.includes(job.id));
    setAllAppliedJobs(appliedJobs);
    setDisplayJobs(appliedJobs);
  }, [allJobs]);

  const handleFilter = (type) => {
    if (type === "all") {
      setDisplayJobs(allAppliedJobs);
    } else if (type === "onsite") {
      const filteredApliedJobs = allAppliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite",
      );
      setDisplayJobs(filteredApliedJobs);
    } else if (type === "remote") {
      const filteredApliedJobs = allAppliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote",
      );
      setDisplayJobs(filteredApliedJobs);
    }
  };

  return (
    <section>
      <div className="mx-auto my-16 flex max-w-screen-2xl flex-col gap-8 p-8 md:my-24">
        <div className="mb-6 flex  justify-end lg:mb-20 lg:px-4">
          <div className="dropdown dropdown-left">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-secondary px-8 py-2 text-white hover:bg-secondary "
            >
              Filter <IoIosArrowDropdown />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li onClick={() => handleFilter("all")}>
                <a>All Jobs</a>
              </li>
              <li onClick={() => handleFilter("onsite")}>
                <a>On Site</a>
              </li>
              <li onClick={() => handleFilter("remote")}>
                <a>Remote</a>
              </li>
            </ul>
          </div>
        </div>
        {displayJobs.map((appliedJob) => (
          <AppliedJobsCard key={appliedJob.id} appliedJob={appliedJob} />
        ))}
      </div>
    </section>
  );
};

export default AppliedJobs;
