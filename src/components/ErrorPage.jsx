import { Link } from "react-router-dom";

const ErrorPage = ({ children }) => {
  return (
    <section className="flex min-h-[calc(100vh-300px)] items-center justify-center bg-sectionHeader-pattern bg-cover bg-center">
      <div className="mx-auto max-w-screen-2xl p-1">
        <div className="animate__animated animate__fadeInUp flex flex-col items-center justify-center py-20">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-5xl md:font-extrabold">
            Page Not Found
          </h2>
          <div className="mt-6 flex flex-col justify-center gap-4 md:flex-row">
            <Link
              to={-1}
              className=" btn min-w-52 rounded-md border-none bg-primary px-4 text-white hover:bg-primary hover:bg-opacity-95 md:flex "
            >
              Go back to Previous Page
            </Link>
            <Link
              to="/"
              className=" btn  min-w-52 rounded-md border-none bg-primary px-4 text-white hover:bg-primary hover:bg-opacity-95 md:flex "
            >
              Go back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
