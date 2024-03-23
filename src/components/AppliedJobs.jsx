import AppliedJobsCard from "./AppliedJobsCard";
import { IoIosArrowDropdown } from "react-icons/io";

const AppliedJobs = () => {
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
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <AppliedJobsCard />
        <AppliedJobsCard />
        <AppliedJobsCard />
        <AppliedJobsCard />
        <AppliedJobsCard />
      </div>
    </section>
  );
};

export default AppliedJobs;
