const SecondaryPageHeader = ({ children }) => {
  return (
    <section className="bg-sectionHeader-pattern bg-cover bg-center">
      <div className="mx-auto max-w-screen-2xl p-1">
        <div className="flex items-center justify-center py-20">
          <h2 className="mb-4 text-center text-3xl font-bold text-black md:text-5xl md:font-extrabold">
            {children}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SecondaryPageHeader;
