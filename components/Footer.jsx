import React from "react";
import Link from "next/link";
import Newsletter from "./Newsletter";
const Footer = () => {
  return (
    //pb-5 grid grid-col-1 md:grid-cols-4 content-center
    <div className="pt-5 bg-black px-10 md:px-20 py-4">
      <div className="flex justify-center">
        <div className="flex flex-5 flex-col justify-end col-span-3">
          <h4 className="font-bold cursor-pointer text-purple text-3xl">
            Sigma
          </h4>
          <span className="text-white text-sm">
            Copyrights © 2022. All Rights Reserved.
          </span>
          <span className="text-gray2 text-sm">
            Developed by <Link href="https://github.com/eulazzo">@eulazzo</Link>
          </span>
        </div>
        {/* <Newsletter /> */}
      </div>
    </div>
  );
};
export default Footer;
