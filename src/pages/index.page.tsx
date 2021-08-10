import type { NextPage } from "next";
import { Content } from "src/pages/index/Content";
import { Hero } from "src/pages/index/Hero";

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
