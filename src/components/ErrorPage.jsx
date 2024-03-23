const ErrorPage = ({ children }) => {
  return (
    <section className="flex min-h-[calc(100vh-304px)] items-center justify-center bg-sectionHeader-pattern bg-cover bg-center">
      <div className="mx-auto max-w-screen-2xl p-1">
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-5xl md:font-extrabold">
            Page Not Found
          </h2>
          <div className="mt-6 flex flex-col justify-center gap-4 md:flex-row">
            <a className=" btn min-w-52 rounded-md border-none bg-primary px-4 text-white hover:bg-primary hover:bg-opacity-95 md:flex ">
              Go back to Previous Page
            </a>
            <a className=" btn  min-w-52 rounded-md border-none bg-primary px-4 text-white hover:bg-primary hover:bg-opacity-95 md:flex ">
              Go back to Home Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
