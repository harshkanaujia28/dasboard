const StatsCard = ({ title, value }) => {
    return (
      <div className="p-5 shadow border rounded-lg">
        <h3 className="text-sm ">{title}</h3>
        <p className="text-2xl  font-bold">{value}</p>
      </div>
    );
  };
  
  export default StatsCard;
