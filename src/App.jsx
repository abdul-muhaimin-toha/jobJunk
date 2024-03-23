import AppliedJobs from "./components/AppliedJobs";
import Footer from "./components/Footer";
import JobDetails from "./components/JobDetails";
import Navbar from "./components/Navbar";
import SecondaryPageHeader from "./components/SecondaryPageHeader";

function App() {
  return (
    <>
      <Navbar />
      <SecondaryPageHeader>Job Details</SecondaryPageHeader>
      <AppliedJobs />
      <Footer />
    </>
  );
}

export default App;
