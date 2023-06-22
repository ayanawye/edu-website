import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Courses from "../components/Courses/Courses";
import Categories from "../components/Categories/Categories";
import Statistics from "../components/Statistics/Statistics";
import Mentor from "../components/Mentor/Mentor";
import Swip from "../components/Swiper/Swiper";
import Trusted from "../components/Trusted/Trusted";
import LatestBlog from "../components/LatestBlog/LatestBlog";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ width: "100%" }}>
        <Hero />
        <Courses />
        <Categories />
        <Statistics />
        <Swip />
        <Trusted />
        <LatestBlog />
      </main>
    </>
  );
}