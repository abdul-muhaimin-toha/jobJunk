import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky left-0 top-0 z-50 w-full bg-primary bg-opacity-95 shadow-lg">
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
                  className="h-6 w-6 text-white"
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
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 space-y-2 rounded-box bg-base-100 p-6 shadow"
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
                  to="/job-categories"
                  className={({ isActive }) =>
                    `font-bold hover:bg-transparent hover:text-primary ${isActive ? "text-primary" : ""}`
                  }
                >
                  Categories
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
              className=" text-2xl font-black text-white hover:bg-transparent hover:text-white"
            >
              jobJunk
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-8 px-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-bold hover:bg-transparent hover:text-white ${isActive ? "text-white" : "text-primary-content"}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/job-categories"
                className={({ isActive }) =>
                  `font-bold hover:bg-transparent hover:text-white ${isActive ? "text-white" : "text-primary-content"}`
                }
              >
                Categories
              </NavLink>
              <NavLink
                to="/featured-jobs"
                className={({ isActive }) =>
                  `font-bold hover:bg-transparent hover:text-white ${isActive ? "text-white" : "text-primary-content"}`
                }
              >
                Featured Jobs
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  `font-bold hover:bg-transparent hover:text-white ${isActive ? "text-white" : "text-primary-content"}`
                }
              >
                Statistics
              </NavLink>

              <NavLink
                to="/applied-jobs"
                className={({ isActive }) =>
                  `font-bold hover:bg-transparent hover:text-white ${isActive ? "text-white" : "text-primary-content"}`
                }
              >
                Applied Jobs
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              to="/featured-jobs"
              className=" rounded-md border-none bg-white p-2.5 text-xs font-bold text-primary-content hover:bg-white hover:bg-opacity-95  md:flex md:items-center md:justify-center md:p-3 md:text-base "
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
