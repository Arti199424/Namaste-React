import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
  //console.log(data);

  
  const handleClick = () => {
    setShowIndex();
    //console.log("Clicked");
  };

  return (
    <div>
      {/* header*/}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-extrabold text-lg">
            {data.title} ({data.
            itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
