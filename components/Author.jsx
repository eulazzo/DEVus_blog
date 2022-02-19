import React from "react";
import Image from "next/image";

// import { grpahCMSImageLoader } from "../util";

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-purple text-white ">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        // loader={grpahCMSImageLoader}
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="mt-2 mb-2 text-xl font-bold">{author.name}</h3>
    <p className=" text-ls">{author.bio}</p>
  </div>
);

export default Author;
