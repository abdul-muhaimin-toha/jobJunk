import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import AppliedJobPage from "./pages/AppliedJobPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import ErrorPage from "./components/ErrorPage";
import FeaturedJobsPage from "./pages/FeaturedJobsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="applied-jobs" element={<AppliedJobPage />} />
      <Route path="featured-jobs" element={<FeaturedJobsPage />} />
      <Route path="job-details/:jobId" element={<JobDetailsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

export default router;
