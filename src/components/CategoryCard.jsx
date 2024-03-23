const CategoryCard = ({ icon, heading, subHeading }) => {
  return (
    <div className="flex flex-col rounded-lg bg-slate-50 p-10 shadow-lg">
      <div className="self-start rounded-sm bg-slate-100 p-2.5">{icon}</div>
      <h4 className="mb-2 text-lg font-bold">{heading}</h4>
      <p className="text-secondary-content">{subHeading}</p>
    </div>
  );
};

export default CategoryCard;
