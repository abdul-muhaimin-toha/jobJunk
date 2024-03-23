const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className=" mx-auto mb-10 mt-20 max-w-xl p-4 md:mt-32">
      <h1 className="mb-4 text-center text-3xl font-bold md:text-5xl md:font-extrabold">
        {title}
      </h1>
      <p className="text-center text-base font-medium md:text-lg">{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
