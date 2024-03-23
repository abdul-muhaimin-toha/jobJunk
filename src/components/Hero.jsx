const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center bg-blend-multiply  ">
      <div className=" bg-gradient-to-b from-[#16161683] to-[#1616164f] ">
        <div className="mx-auto max-w-screen-2xl p-1">
          <div className="hero min-h-screen">
            <div className="hero-content text-center">
              <div className="animate__animated  animate__fadeInUp max-w-md ">
                <h1 className="animate__animated  text-5xl font-bold text-white">
                  One step closer to your dream job.
                </h1>
                <p className="animate__animated py-6 text-base-100">
                  Explore thousands of job opportunities with all the
                  information you need. Its your future. Come find it. Manage
                  all your job application from start to finish.
                </p>
                <a
                  href="#featuredJobList"
                  className=" btn rounded-md border-none bg-primary text-base text-white hover:bg-primary hover:bg-opacity-95"
                >
                  Start Applying
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
