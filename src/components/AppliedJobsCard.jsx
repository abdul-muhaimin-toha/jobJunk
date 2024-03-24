import { CiMap, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const AppliedJobsCard = ({ appliedJob }) => {
  const {
    id,
    logo,
    company_name,
    salary,
    job_title,
    contact_information,
    remote_or_onsite,
    job_type,
  } = appliedJob;

  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-blue-50 px-2 py-8 shadow-lg md:bg-none md:p-4 lg:flex-row lg:bg-white  ">
      <div className="flex items-center justify-center self-stretch  bg-blue-50 px-10 py-4">
        <img
          src={logo}
          alt={company_name}
          className="h-full w-36  object-cover lg:h-10 lg:object-contain"
        />
      </div>
      <div className="flex flex-grow flex-col lg:flex-row">
        <div className="flex flex-grow flex-col  p-2">
          <h4 className="mb-4 text-xl font-bold md:text-2xl">{job_title}</h4>
          <p className="mb-4 text-lg">{company_name}</p>
          <div className="gap mb-4 flex flex-col gap-4 md:flex-row">
            <p className="rounded-md border border-primary px-4 py-2 ">
              {remote_or_onsite}
            </p>
            <p className="rounded-md border border-primary px-4 py-2 ">
              {job_type}
            </p>
          </div>
          <div className="mb-6 flex flex-col gap-3 font-medium text-black md:flex-row">
            <div className="flex items-center gap-2">
              <CiMap className="text-xl text-primary" />
              <p>{contact_information.address}</p>
            </div>
            <div className="flex items-center gap-2">
              <CiDollar className="text-xl text-primary" />
              <p>Sallary: {salary} </p>
            </div>
          </div>
        </div>
        <div className=" flex w-full items-center justify-center self-center pb-4 lg:w-auto">
          <Link
            to={`/job-details/${id}`}
            className="btn w-full self-stretch rounded-md border-none bg-primary text-base text-white hover:bg-primary hover:bg-opacity-95 lg:w-auto"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
