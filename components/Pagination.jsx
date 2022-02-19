import Image from "next/image";
import rightArrow from "../public/rightArrow.svg";
import leftArrow from "../public/leftArrow.svg";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className=" flex gap-2 justify-center mt-10">
      <div
        className="flex flex-col justify-center
        text-center shadow-xl  bg-black h-10 w-10 cursor-pointer rounded-md"
      >
        <Image src={leftArrow} />
      </div>

      {pageNumbers.map((number) => (
        <nav
          className="flex flex-col justify-center 
          text-center shadow-xl h-10 w-10 text-base rounded-md"
        >
          <ul>
            <li key={number} className="list-none cursor-pointer">
              <p onClick={() => paginate(number)}>{number}</p>
            </li>
          </ul>
        </nav>
      ))}

      <div
        className="flex flex-col justify-center
        text-center shadow-xl bg-black h-10 w-10 rounded-md  "
      >
        <Image src={rightArrow} />
      </div>
    </div>
  );
};

export default Pagination;
