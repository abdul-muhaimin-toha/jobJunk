import { CiMap, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const FeaturedJobCard = ({ featuredJob }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    salary,
    contact_information,
  } = featuredJob;

  return (
    <div className="flex flex-col rounded-lg bg-slate-50 p-10 shadow-lg">
      <img
        src={logo}
        alt={company_name}
        className="object-fit mb-8 h-10 w-32"
      />
      <h4 className="mb-4 text-xl font-bold md:text-2xl">{job_title}</h4>
      <p className="mb-4 text-lg">{company_name}</p>
      <div className="gap mb-4 flex flex-col gap-4 md:flex-row">
        <p className="rounded-md border border-primary px-4 py-2 ">
          {remote_or_onsite}
        </p>
      </div>
      <div className="mb-6 flex flex-col gap-3 font-medium text-black lg:flex-row">
        <div className="flex min-h-16 items-center gap-2">
          <div>
            <CiMap className="text-xl text-primary" />
          </div>
          <p>{contact_information.address}</p>
        </div>
        <div className="flex  items-center gap-2">
          <div>
            <CiDollar className="text-xl text-primary" />
          </div>
          <p>Sallary: {salary} </p>
        </div>
      </div>
      <Link
        to={`/job-details/${id}`}
        className="btn self-start rounded-md border-none bg-primary text-base text-white hover:bg-primary hover:bg-opacity-95"
      >
        view Details
      </Link>
    </div>
  );
};

export default FeaturedJobCard;
