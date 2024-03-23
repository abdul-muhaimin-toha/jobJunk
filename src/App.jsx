import CategoryList from "./components/CategoryList";
import FeaturedJobsList from "./components/FeaturedJobsList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryList />
      <FeaturedJobsList />
      <Footer />
    </>
  );
}

export default App;
