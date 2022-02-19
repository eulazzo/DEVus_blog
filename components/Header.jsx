import { useContext } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getCategories } from "../services";
import Image from "next/image";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategory) => setCategories(newCategory));
  }, []);

  return (
    // container mx-auto
    // px-10 mb-8
    <div className=" bg-black px-10 md:px-20 mb-8">
      <div className="border-b-[1px] w-full inline-block  py-5">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-white text-4xl">
              Sigma
            </span>
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle  text-white  ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
          <div className="md:float-right mt-2 align-middle  text-white  ml-4 font-semibold cursor-pointer">
            <Link href={"/sigma/about"}>
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
