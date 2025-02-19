const StatsCard = ({ title, value }) => {
    return (
      <div className="p-5  bg-white shadow rounded-lg">
        <h3 className="text-sm text-black">{title}</h3>
        <p className="text-2xl text-gray-600 font-bold">{value}</p>
      </div>
    );
  };
  
  export default StatsCard;
