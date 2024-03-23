import { CiMap, CiDollar } from "react-icons/ci";

const AppliedJobsCard = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 bg-blue-50 px-2 py-8 shadow-lg md:bg-none md:p-4 lg:flex-row lg:bg-white  ">
      <div className="flex items-center justify-center self-stretch  bg-blue-50 px-10 py-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png"
          alt="Google Logo"
          className="h-full w-36  object-cover lg:h-10 lg:object-contain"
        />
      </div>
      <div className="flex flex-grow flex-col lg:flex-row">
        <div className="flex flex-grow flex-col  p-2">
          <h4 className="mb-4 text-xl font-bold md:text-2xl">
            Technical Database Designer
          </h4>
          <p className="mb-4 text-lg">Google LLC</p>
          <div className="gap mb-4 flex flex-col gap-4 md:flex-row">
            <p className="rounded-md border border-primary px-4 py-2 ">
              Remote
            </p>
            <p className="rounded-md border border-primary px-4 py-2 ">
              Full Time
            </p>
          </div>
          <div className="mb-6 flex flex-col gap-3 font-medium text-black md:flex-row">
            <div className="flex items-center gap-2">
              <CiMap className="text-xl text-primary" />
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-2">
              <CiDollar className="text-xl text-primary" />
              <p>Sallary: 100k - 150k </p>
            </div>
          </div>
        </div>
        <div className=" flex w-full items-center justify-center self-center pb-4 lg:w-auto">
          <a className="btn w-full self-stretch rounded-md border-none bg-primary text-base text-white hover:bg-primary hover:bg-opacity-95 lg:w-auto">
            Show Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
