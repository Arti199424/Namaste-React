import { useState,useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact,setbtnNameReact] =useState("LogIn");
  //console.log("Header Render")

  const onlineStatus=useOnlineStatus();

const {loggedInUser}=useContext(UserContext);
//console.log(loggedInUser);

//subscribing to the store using a selector

const cartItems=useSelector((store)=>store.cart.items);
console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="h-[90] " src={LOGO_URL} alt="logo-cont" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 gap-8  font-bold">
        <li>Online Status:{onlineStatus?"✅":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 font-bold text-xl"><Link to="/cart">Cart-({cartItems.length}items)</Link></li>
          <button
            className="login"
            onClick={() => {
              btnNameReact==="LogIn"?setbtnNameReact("LogOut"):setbtnNameReact("LogIn");}}
          >
            {btnNameReact}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;