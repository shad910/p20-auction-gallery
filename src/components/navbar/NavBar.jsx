import React from "react";

const NavBar = ({ price, favItem }) => {
  return (
    <nav>
      <div className="navbar bg-[#FFFFFF] gap-x-3 px-0 py-0">
        <div className="navbar-start">
          <a className="text-lg md:text-2xl text-[#003EA4] cursor-pointer">
            Auction<span className="text-[#FFD337] font-bold">Gallery</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Auctions</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>How to works</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-x-2.5 items-center">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle bg-[#EBF0F5]"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">
                  {favItem.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {favItem.length} Items
                </span>
                <span className="text-info">Subtotal: ${price}</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Auctions</a>
              </li>
              <li>
                <a>Categories</a>
              </li>
              <li>
                <a>How to works</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
