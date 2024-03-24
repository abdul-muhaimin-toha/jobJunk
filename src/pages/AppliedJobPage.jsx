import SecondaryPageHeader from "../components/SecondaryPageHeader";
import AppliedJobs from "../components/AppliedJobs";
import { useLoaderData } from "react-router-dom";

const AppliedJobPage = () => {
  const allJobs = useLoaderData();

  return (
    <>
      <SecondaryPageHeader>Applied Jobs</SecondaryPageHeader>
      <AppliedJobs allJobs={allJobs} />
    </>
  );
};

export default AppliedJobPage;

export const AllJobsForAppliedJobsPage = async () => {
  const response = await fetch("/jobs.json");
  return response.json();
};
