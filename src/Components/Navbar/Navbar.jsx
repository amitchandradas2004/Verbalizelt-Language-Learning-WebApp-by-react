import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow-md bg-base-200 px-2 md:px-0 fixed top-0 z-10 w-full">
      <div className="flex justify-between items-center container mx-auto py-1.5 ">
        <div>
          <h3 className="text-3xl font-bold">VerbalizeIt</h3>
        </div>
        <div className="flex  items-center gap-5 font-medium hidden md:inline-flex">
          <a href="#">
            <p>Service</p>
          </a>
          <a href="#">
            <p>Blog</p>
          </a>
          <a href="#">
            <p>About Us</p>
          </a>
          <a href="#">
            <p>Contact</p>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-warning rounded-full text-black w-25 md:w-30">
            Register
          </button>
          {/* sidebar */}
          <div className="inline-flex md:hidden">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="  w-full">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-2"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 min-h-full w-50 p-4 gap-2">
                {/* Sidebar content here */}
                <li>
                  <a href="#" className="btn rounded-full">
                    <p>Service</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn rounded-full">
                    <p>Blog</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn rounded-full">
                    <p>About Us</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn rounded-full">
                    <p>Contact</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
