import type { NextPage } from "next";
import { Content } from "src/components/Content";
import { Hero } from "src/components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <hr />
      <Content />
    </>
  );
};
export default Home;
