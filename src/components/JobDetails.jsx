import { CiDollar } from "react-icons/ci";
import toast from "react-hot-toast";

import {
  getAppliedJobsFromLocalStorage,
  updateAppliedJobsInLocalStorage,
} from "../utils/localStorage";
import { Link } from "react-router-dom";

const JobDetails = ({ targetedJob }) => {
  const {
    id,
    logo,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = targetedJob;

  const handleApply = () => {
    const appliedJobsInLocalStorage = getAppliedJobsFromLocalStorage();
    const isAppliedJobsAlreadyExistInLocalStorage =
      appliedJobsInLocalStorage.find((job) => job == id);
    if (!isAppliedJobsAlreadyExistInLocalStorage) {
      updateAppliedJobsInLocalStorage(id);
      toast("Added SuccessFully", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast("Already Added", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-12 md:py-32">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col rounded-xl bg-white p-4 text-black md:p-6 lg:col-span-2">
            <img
              src={logo}
              alt={job_title}
              className="object-fit mb-8 h-12 w-36"
            />
            <h5 className="mb-2 font-bold">Job Description:</h5>
            <p className="mb-4">{job_description}</p>
            <h5 className="mb-2 font-bold">Job Responsibility:</h5>
            <p className="mb-4">{job_responsibility}</p>
            <h5 className="mb-2 font-bold">Educational Requirement:</h5>
            <p className="mb-4">{educational_requirements}</p>
            <h5 className="mb-2 font-bold">Experience:</h5>
            <p className="mb-4">{experiences}</p>
          </div>
          <div>
            <div className="flex flex-col rounded-lg bg-slate-100 p-4 md:p-6">
              <h4 className="mb-6  border-b-2 pb-3 text-lg font-black text-primary">
                Job Details
              </h4>
              <div className="mb-4 flex items-center gap-2">
                <CiDollar className="text-xl text-primary" />
                <p>
                  <span className="font-bold">Sallary:</span> {salary}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <CiDollar className="text-xl text-primary" />
                </div>
                <p>
                  <span className="font-bold">Job Title:</span> {job_title}
                </p>
              </div>
              <h4 className="mb-6 mt-6  border-b-2 pb-3 text-lg font-black text-primary">
                Contact Information
              </h4>
              <div className="mb-4 flex items-center gap-2">
                <div>
                  <CiDollar className="text-xl text-primary" />
                </div>
                <p>
                  <span className="font-bold">Phone:</span>{" "}
                  {contact_information.phone}
                </p>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <div>
                  <CiDollar className="text-xl text-primary" />
                </div>
                <p>
                  <span className="font-bold">Email:</span>{" "}
                  {contact_information.email}
                </p>
              </div>
              <div className="flex items-center  gap-2">
                <div>
                  <CiDollar className="text-xl text-primary" />
                </div>
                <p>
                  <span className="font-bold">Address:</span> Dhanmondi 32,
                  Sukrabad Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center gap-6 md:mt-8 ">
              <button
                onClick={handleApply}
                className=" btn w-full rounded-md border-none bg-primary text-white hover:bg-primary hover:bg-opacity-95"
              >
                Apply Now
              </button>
              <Link
                to={-1}
                className=" btn w-full rounded-md border-none bg-primary text-white hover:bg-primary hover:bg-opacity-95"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
