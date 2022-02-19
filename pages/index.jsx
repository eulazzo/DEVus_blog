import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import FeaturedPost from "../sections/FeaturedPost";
import Banner from "../components/Banner";
import { useState } from "react";
import { Pagination } from "../components";

export default function Home({ fetchedPosts }) {
  const [posts] = useState(fetchedPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFistPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexofFistPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Sigma - Let's code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <FeaturedPost />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {currentPosts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1 bg-white">
          <div className="lg:sticky relative">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      <Pagination
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPosts={fetchedPosts.length}
      />
    </div>
  );
}

export async function getStaticProps() {
  const fetchedPosts = (await getPosts()) || [];

  return {
    props: {
      fetchedPosts,
    },
  };
}
