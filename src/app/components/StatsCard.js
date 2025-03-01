const StatsCard = ({ title, value }) => {
    return (
      <div className="p-5 shadow border rounded-lg border-gray-400">
        <h3 className="text-sm text-gray-600 ">{title}</h3>
        <p className="text-2xl  font-bold text-black dark:text-white">{value}</p>
      </div>
    );
  };
  
  export default StatsCard;
