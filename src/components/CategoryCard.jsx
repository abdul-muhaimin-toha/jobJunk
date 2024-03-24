const CategoryCard = ({ icon, heading, subHeading }) => {
  return (
    <div className="flex flex-col rounded-lg bg-primary p-10 shadow-lg">
      <div className="self-start rounded-sm  p-2.5">{icon}</div>
      <h4 className="mb-2 text-lg font-bold text-white">{heading}</h4>
      <p className="text-primary-content text-white">{subHeading}</p>
    </div>
  );
};

export default CategoryCard;
