import SecondaryPageHeader from "../components/SecondaryPageHeader";
import JobDetails from "../components/JobDetails";
import { useLoaderData, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const jobs = useLoaderData();
  const targetedJob = jobs.find((job) => job.id === parseInt(jobId));

  return (
    <>
      <SecondaryPageHeader>Job Details</SecondaryPageHeader>
      <JobDetails targetedJob={targetedJob} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default JobDetailsPage;

export const AllJobsLoader = async () => {
  const response = await fetch("/jobs.json");
  return response.json();
};
