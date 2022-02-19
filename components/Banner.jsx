const Banner = () => {
  return (
    <div className="flex items-center md:bg-white justify-between py-10 lg:py-0">
      <div className="space-y-5 ">
        <div className="w-[80%]">
          <h1 className="max-w-xl pb-1 text-4xl md:text-6xl font-semibold text-purple">
            SIGMA
          </h1>
          <span className="text-gray0 ">
            {/* Here I share things about Web and Mobile Development that I am
            currently learning or I already know, this way i can learn better and
            maybe end up helping someone. */}
            Articles about Javascript, React, React Native, Node and MongoDB.
          </span>
        </div>
      </div>

      <img
        className="hidden h-32 md:inline-flex lg:h-96"
        src="/LogoBanner.svg"
        alt=""
      />
    </div>
  );
};

export default Banner;
