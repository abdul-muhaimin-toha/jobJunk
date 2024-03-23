const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center bg-blend-multiply  ">
      <div className=" bg-gradient-to-b from-[#16161683] to-[#1616164f] ">
        <div className="mx-auto max-w-screen-2xl p-1">
          <div className="hero min-h-screen">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold text-white">
                  One step closer to your dream job.
                </h1>
                <p className="py-6 text-base-100">
                  Explore thousands of job opportunities with all the
                  information you need. Its your future. Come find it. Manage
                  all your job application from start to finish.
                </p>
                <a className="btn rounded-md border-none bg-primary text-base text-white hover:bg-primary hover:bg-opacity-95">
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
