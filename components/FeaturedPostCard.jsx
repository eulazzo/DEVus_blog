import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const FeaturedPostCard = ({ post }) => {
  const isTheTitleBig = (title) => {
    const madeTitleSmaller = `${title.slice(0, 45)}...`;
    return `${title.length > 45 ? madeTitleSmaller : title}`;
  };

  return (
    <div className="relative h-72 mt-10 md:mt-24">
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72 "
        style={{ backgroundImage: `url('${post?.featuredImage.url}')` }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray0 via-gray2 to-black w-full h-72" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <p className="text-white mb-4 text-shadow font-semibold text-xs">
          {moment(post?.createdAt).format("MMM DD, YYYY")}
        </p>
        <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
          {isTheTitleBig(post?.title)}
        </p>
        <div className="flex items-center absolute bottom-5 w-full justify-center">
          <div className="border-2 border-purple rounded-full w-8 h-8 ">
            <Image
              unoptimized
              alt={post?.author.name}
              height="30px"
              width="30px"
              className="align-middle drop-shadow-lg rounded-full "
              src={post?.author.photo.url}
            />
          </div>
          <p className="inline align-middle text-white text-shadow ml-2 font-medium">
            {post?.author.name}
          </p>
        </div>
      </div>
      <Link href={`/post/${post?.slug}`}>
        <span className="cursor-pointer absolute w-full h-full" />
      </Link>
    </div>
  );
};

export default FeaturedPostCard;
