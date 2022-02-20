import { useRouter } from "next/router";
import { Loader, Sidebar } from "../../components";

const About = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8  ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8 text-gray0 text-lg ">
          <p>
            The other day I read something like{" "}
            <cite>
              "The best way to learn is to teach what you are learning"{" "}
            </cite>{" "}
            and I totally agree with that. That's a good reason for making a
            blog, right? :) <br />
            Here I share things I've learned about{" "}
            <span className="text-purple font-semibold"> Web</span> and{" "}
            <span className="text-purple font-semibold">
              {" "}
              Mobile Development
            </span>{" "}
            from courses, bootcamps or articles that I occasionally read to
            learn something.
            <br /> <br />
            To improve my English writing skills i decided to write the articles
            in English, but since i'm not that good at it you might found some
            typos. My apologies in advance, that can happen very often.
          </p>
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
