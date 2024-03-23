import { CiMap, CiDollar } from "react-icons/ci";

const FeaturedJobCard = () => {
  return (
    <div className="flex flex-col rounded-lg bg-slate-50 p-10 shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png"
        alt="Google Logo"
        className="object-fit mb-8 h-10 w-32"
      />
      <h4 className="mb-4 text-xl font-bold md:text-2xl">
        Technical Database Designer
      </h4>
      <p className="mb-4 text-lg">Google LLC</p>
      <div className="gap mb-4 flex flex-col gap-4 md:flex-row">
        <p className="rounded-md border border-primary px-4 py-2 ">Remote</p>
        <p className="rounded-md border border-primary px-4 py-2 ">Full Time</p>
      </div>
      <div className="mb-6 flex flex-col gap-3 font-medium text-black lg:flex-row">
        <div className="flex items-center gap-2">
          <CiMap className="text-xl text-primary" />
          <p>Dhaka, Bangladesh</p>
        </div>
        <div className="flex items-center gap-2">
          <CiDollar className="text-xl text-primary" />
          <p>Sallary: 100k - 150k </p>
        </div>
      </div>
      <a className="btn self-start rounded-md border-none bg-primary text-base text-white hover:bg-primary hover:bg-opacity-95">
        view Details
      </a>
    </div>
  );
};

export default FeaturedJobCard;
