import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../../context/BasketProvider";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { basket } = useContext(BasketContext);

  const { user } = useContext(AuthContext);

  return (
    <header className="w-full container">
      <div className="flex justify-between p-4 drop-shadow-lg">
        <h1 className="font-bold text-2xl">فروشگاه</h1>
        <div className="flex gap-4">
          {!user && (
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-black"
              }
            >
              ورود
            </NavLink>
          )}

          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-red-700" : "text-black"
            }
          >
            صفحه اصلی
          </NavLink>

          <div className="flex gap-1">
            <NavLink
              to={"/factor"}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-black"
              }
            >
              سبد خرید
            </NavLink>
            {basket?.length ?? 0}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
