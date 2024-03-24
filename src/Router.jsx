import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import Home, { FeaturedJobsAndCategoriesLoader } from "./pages/Home";
import AppliedJobPage, {
  AllJobsForAppliedJobsPage,
} from "./pages/AppliedJobPage";
import JobDetailsPage, { AllJobsLoader } from "./pages/JobDetailsPage";
import ErrorPage from "./components/ErrorPage";
import FeaturedJobsPage, { FeaturedJobsLoader } from "./pages/FeaturedJobsPage";
import JobCategoriesPage, {
  JobCategoriesLoader,
} from "./pages/JobCategoriesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={<Home />}
        loader={FeaturedJobsAndCategoriesLoader}
      />
      <Route
        path="applied-jobs"
        element={<AppliedJobPage />}
        loader={AllJobsForAppliedJobsPage}
      />
      <Route
        path="featured-jobs"
        element={<FeaturedJobsPage />}
        loader={FeaturedJobsLoader}
      />
      <Route
        path="job-categories"
        element={<JobCategoriesPage />}
        loader={JobCategoriesLoader}
      />
      <Route
        path="job-details/:jobId"
        element={<JobDetailsPage />}
        loader={AllJobsLoader}
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

export default router;
