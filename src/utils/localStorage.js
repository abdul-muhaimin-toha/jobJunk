const getAppliedJobsFromLocalStorage = () => {
  const appliedJobsInString = localStorage.getItem("appliedJobs");
  if (appliedJobsInString) {
    return JSON.parse(appliedJobsInString);
  } else {
    return [];
  }
};

const setAppliedJobsInLocalStorage = (appliedjobsArr) => {
  const jobsArrInString = JSON.stringify(appliedjobsArr);
  localStorage.setItem("appliedJobs", jobsArrInString);
};

const updateAppliedJobsInLocalStorage = (appliedJob) => {
  const appliedJobsArr = getAppliedJobsFromLocalStorage();
  appliedJobsArr.push(appliedJob);
  setAppliedJobsInLocalStorage(appliedJobsArr);
};

export {
  getAppliedJobsFromLocalStorage,
  setAppliedJobsInLocalStorage,
  updateAppliedJobsInLocalStorage,
};
