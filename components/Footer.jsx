import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="pt-5 bg-black">
      <div className="ml-10 md:ml-20 pb-5 grid grid-col-1 md:grid-cols-4 content-center">
        <div className="flex flex-col justify-end">
          <h4 className="font-bold cursor-pointer  text-purple text-3xl">
            SIGMA
          </h4>
          <span className="text-white text-sm">
            Copyrights © 2022. All Rights Reserved.
          </span>
          <span className="text-gray2 text-sm">
            Developed by {" "}
            <Link href="https://github.com/eulazzo">@eulazzo</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
