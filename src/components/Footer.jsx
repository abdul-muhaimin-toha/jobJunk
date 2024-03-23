const Footer = () => {
  return (
    <div className="bg-primary shadow-lg">
      <div className="mx-auto max-w-screen-2xl p-1">
        <footer className="footer flex flex-col justify-between p-10 text-white  md:flex-row">
          <aside>
            <a className=" mb-4 text-3xl font-black hover:bg-transparent hover:text-primary">
              jobJunk
            </a>
            <p className="">
              Job Junk Private Ltd.
              <br />
              &copy; Copyright by Abdul Muhaimin Toha
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Links</h6>
            <a className="link-hover link">Home</a>
            <a className="link-hover link">Statistics</a>
            <a className="link-hover link">Applied Jobs</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link-hover link">About us</a>
            <a className="link-hover link">Contact</a>
            <a className="link-hover link">Jobs</a>
            <a className="link-hover link">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link-hover link">Terms of use</a>
            <a className="link-hover link">Privacy policy</a>
            <a className="link-hover link">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;