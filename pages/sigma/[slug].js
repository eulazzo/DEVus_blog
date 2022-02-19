import { useRouter } from "next/router";
import { Loader, Sidebar } from "../../components";

const About = ({ posts }) => {
  const router = useRouter();

  console.log(router);

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8 text-gray0 text-lg">
          In this blog I share things about{" "}
          <span className="text-purple font-semibold"> Web</span> and{" "}
          <span className="text-purple font-semibold">Mobile Development </span>{" "}
          that I am currently learning or already know. That way I can learn
          better and maybe end up helping someone else. The articles are being
          written in English because one of the reasons this blog exists is
          because I want to improve my English writing skills and I think this
          is a very good way to do it. Sorry in advance in case you found some
          typos, that can happen very often.
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
