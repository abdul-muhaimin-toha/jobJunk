import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer-pattern bg-sectionFooter-pattern bg-cover bg-left-top shadow-lg">
      <div className="mx-auto max-w-screen-2xl p-1">
        <footer className="footer flex flex-col justify-between p-10   md:flex-row">
          <aside>
            <Link
              to="/"
              className=" mb-4 text-3xl font-black hover:bg-transparent"
            >
              jobJunk
            </Link>
            <p className="">
              Job Junk Private Ltd.
              <br />
              &copy; Copyright by Abdul Muhaimin Toha
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Links</h6>
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
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link-hover link">About us</a>
            <a className="link-hover link">Contact</a>
            <a className="link-hover link">Jobs</a>
            <a className="link-hover link">Press kit</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
