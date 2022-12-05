import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import IconCart from "../icons/IconCart";
import { useSelector } from "react-redux";
import IconMenuHome from "../icons/IconMenuHome";
import IconMenuBag from "../icons/IconMenuBag";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const menuLinks = [
  {
    title: "Home",
    path: "/",
    icon: <IconMenuHome></IconMenuHome>,
  },
  {
    title: "Shop",
    path: "/shop",
    icon: <IconMenuBag></IconMenuBag>,
  },
  {
    title: "Cart",
    path: "/cart",
    icon: <IconCart></IconCart>,
  },
];
const Header = () => {
  const [profile, setProfile] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const totalQuantity = useSelector((state) => state?.cart?.totalQuantity);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollHeader);
    return () => {
      window.removeEventListener("scroll", handleScrollHeader);
    };
  });

  const handleScrollHeader = () => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop > 90
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const navigateToCart = () => {
    navigate("/cart");
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-10 isolute header bg-white">
        <div className="container mx-auto py-4 px-5 max-sm:px-3 max-sm:py-1 sm:grid sm:grid-cols-[1fr,2fr,1fr] md:grid-cols-3 flex items-center w-full sm:h-[80px] h-[60px] max-sm:bg-white max-sm:shadow-lg">
          <NavLink to="/" className={"w-[50px] h-[50px]"}>
            <img src="/qora.png" alt="" className="w-full h-full"/>
          </NavLink>

          <div className="max-sm:hidden flex gap-x-2 items-center justify-center">
            {menuLinks.map((link) => (
              <NavLink
                to={link.path}
                key={link.title}
                className={`font-medium text-[15px] text-white py-3 px-5 lg:h-[85%] sm:h-[90%] flex items-center justify-center rounded-[30px] active-tablet`}
              >
                {link.title}
              </NavLink>
            ))}
          </div>


          <div className="flex items-center justify-end cursor-pointer gap-x-5">
            <div className="relative">
              <button
                className="sm:p-[10px] p-[10px] rounded-full bg-blueDark text-white"
                onClick={navigateToCart}
              >
                <IconCart></IconCart>
              </button>
              <span className="absolute -top-1 -right-1 w-[20px] h-[20px] bg-error text-white rounded-full text-sm flex items-center justify-center">
                {totalQuantity}
              </span>
            </div>
            <div>
              {user ? (
                <div className="relative" onClick={() => setProfile(!profile)}>
                  <div className="flex items-center text-white">
                    <img
                      src="/login.png"
                      alt=""
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <ion-icon name="caret-down-outline"></ion-icon>
                  </div>
                </div>
              ) : (
                <NavLink
                  to={"/login"}
                  className="rounded-md bg-primary text-white py-3 px-6"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
      {profile && (
        <div className="z-50 isolute fixed top-[75px] right-10 bg-white text-black rounded-lg p-5 flex flex-col gap-5">
          <p className="flex gap-2">
            <span>Username:</span>{" "}
            <span className="font-medium">{user.displayName}</span>
          </p>
          <p className="flex gap-2">
            <span>Email:</span>
            <span className="font-medium">{user.email}</span>
          </p>
          <NavLink
            to={"/signup"}
            onClick={handleSignOut}
            className="rounded-md bg-primary text-white flex items-center justify-center gap-x-2 py-3 px-4"
          >
            Logout
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
