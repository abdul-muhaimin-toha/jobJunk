import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky left-0 top-0 z-50 w-full bg-white bg-opacity-95 shadow-lg">
      <div className="mx-auto max-w-screen-2xl p-1">
        <nav className="navbar">
          <div className="navbar-start">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost p-0 pr-4 hover:bg-transparent hover:text-primary lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-bold hover:bg-transparent hover:text-primary ${isActive ? "text-primary" : ""}`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/featured-jobs"
                  className={({ isActive }) =>
                    `font-bold hover:bg-transparent hover:text-primary ${isActive ? "text-primary" : ""}`
                  }
                >
                  Featured Jobs
                </NavLink>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    `font-bold hover:bg-transparent hover:text-primary ${isActive ? "text-primary" : ""}`
                  }
                >
                  Statistics
                </NavLink>

                <NavLink
                  to="/applied-jobs"
                  className={({ isActive }) =>
                    `font-bold hover:bg-transparent hover:text-primary ${isActive ? "text-primary" : ""}`
                  }
                >
                  Applied Jobs
                </NavLink>
              </ul>
            </div>
            <Link
              to="/"
              className=" text-2xl font-black hover:bg-transparent hover:text-primary"
            >
              jobJunk
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-8 px-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-bold hover:bg-transparent hover:text-primary ${isActive ? "text-primary" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/featured-jobs"
                className={({ isActive }) =>
                  `font-bold hover:bg-transparent hover:text-primary ${isActive ? "text-primary" : ""}`
                }
              >
                Featured Jobs
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  `font-bold hover:bg-transparent hover:text-primary ${isActive ? "text-primary" : ""}`
                }
              >
                Statistics
              </NavLink>

              <NavLink
                to="/applied-jobs"
                className={({ isActive }) =>
                  `font-bold hover:bg-transparent hover:text-primary ${isActive ? "text-primary" : ""}`
                }
              >
                Applied Jobs
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              to="/featured-jobs"
              className=" btn  rounded-md border-none bg-primary text-white hover:bg-primary hover:bg-opacity-95 md:flex "
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
