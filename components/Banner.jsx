import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex items-center  justify-between py-10 lg:py-0">
      <div className="space-y-5 ">
        <div className="w-[80%]">
          <h1 className="max-w-xl pb-1 text-4xl md:text-6xl font-semibold text-purple">
            Sigma
          </h1>
          <span className="text-gray0 ">
            Articles about Javascript, React, React Native, Node and MongoDB.
          </span>

          <Link href="/sigma/about">
            <button
              className="bg-white px-5
              py-3 shadow-md my-3 font-bold hover:shadow-xl 
              active:scale-90 transition duration-150 text-gray0"
            >
              About sigma
            </button>
          </Link>
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
