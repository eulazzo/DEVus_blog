import { useRouter } from "next/router";
import { Loader, Sidebar } from "../../components";

const About = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8 text-gray0 text-lg">
          The other day I read something like{" "}
          <cite>
            "The best way to learn is to teach what you are learning"{" "}
          </cite>{" "}
          and I totally agree with that. That's a good reason for making a blog,
          right? :) <br />
          <br />
          Here I share things I've learned about{" "}
          <span className="text-purple font-semibold"> Web</span> and{" "}
          <span className="text-purple font-semibold">
            {" "}
            Mobile Development{" "}
          </span>
          . The articles are being written in English because I want to improve
          my English writing skills and I think that's is a very good way to do
          it. Sorry in advance in case you found some typos, that can happen
          very often.
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
