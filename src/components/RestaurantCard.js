import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {loggedInUser}=useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="mt-4  p-2 w-[200px] h-[450px] rounded-lg bg-gray-100 hover:bg-gray-200 items-center">
      <img
        className="h-[195px] w-[190px] rounded-lg"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}Rupees</h4>
      <h4>{deliveryTime}minutes</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

//Higher Order Component
export const withRestaurantOffer = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { header,subHeader} = resData?.info.aggregatedDiscountInfoV3
    ;
    //console.log(resData.info.name);
    return (
      <div className="relative ">
        <h1 className="absolute top-40 pl-4 text-white font-extrabold text-xl">
         Offer {header} {subHeader}
        </h1>
        <RestaurantCard {...props} />
      </div>
    );
    //console.log(props.aggregatedDiscountInfoV3);
  };
};
export default RestaurantCard;