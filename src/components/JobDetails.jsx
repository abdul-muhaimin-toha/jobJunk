import { CiDollar } from "react-icons/ci";

const JobDetails = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-12 md:py-32">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col p-2 text-black md:p-6 lg:col-span-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png"
              alt="Google Logo"
              className="object-fit mb-8 h-12 w-36"
            />
            <h5 className="mb-2 font-bold">Job Description:</h5>
            <p className="mb-4">
              A UI/UX (User Interface/User Experience) designer is responsible
              for designing and creating engaging and effective interfaces for
              software and web applications. This includes designing the layout,
              visual design, and interactivity of the user interface.
            </p>
            <h5 className="mb-2 font-bold">Job Responsibility:</h5>
            <p className="mb-4">
              Collaborating with cross-functional teams: UI/UX designers often
              work closely with other teams, including product management,
              engineering, and marketing, to ensure that the user interface is
              aligned with business and technical requirements. You will need to
              be able to effectively communicate your design ideas and gather
              feedback from other team members.
            </p>
            <h5 className="mb-2 font-bold">Educational Requirement:</h5>
            <p className="mb-4">
              achelor degree to complete any reputational university.
            </p>
            <h5 className="mb-2 font-bold">Experience:</h5>
            <p className="mb-4">2-3 Years in this field.</p>
          </div>
          <div>
            <div className="flex flex-col rounded-lg bg-slate-100 p-2 md:p-6">
              <h4 className="mb-6  border-b-2 pb-3 text-lg font-black text-primary">
                Job Details
              </h4>
              <div className="mb-4 flex items-center gap-2">
                <CiDollar className="text-xl text-primary" />
                <p>
                  <span className="font-bold">Sallary:</span> 100k - 150k
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <CiDollar className="text-xl text-primary" />
                </div>
                <p>
                  <span className="font-bold">Job Title:</span> Product Designer
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
                  <span className="font-bold">Phone:</span> 01750-00 00 00
                </p>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <div>
                  <CiDollar className="text-xl text-primary" />
                </div>
                <p>
                  <span className="font-bold">Email:</span> info@gmail.com
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
            <div className="mt-4 flex items-center justify-center md:mt-8 ">
              <a className=" btn w-full rounded-md border-none bg-primary text-white hover:bg-primary hover:bg-opacity-95">
                See All Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
