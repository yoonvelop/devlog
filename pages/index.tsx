import CardList from "components/card/CardList";
import type { GetStaticProps, NextPage } from "next";
import { getDatabaseItems } from "../cms/notion";
import { getAllTags } from "utils/getAllTags";
import PageHead from "../components/common/PageHead";
import HeroSection from "../components/intro/HeroSection";
import { CardData } from "../types/types";
import { parseDatabaseItems } from "../utils/parseDatabaseItems";
import TagList from "components/tag/TagList";

interface HomeProps {
  data: CardData[];
  allTags: CardData["tags"];
}

const Home = ({ data, allTags }: HomeProps) => {
  return (
    <>
      <PageHead />
      <HeroSection />
      <section className="m-4 min-h-[50vh] max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-8 px-4">
        <aside className="basis-[15%]">
          <div className="p-4 rounded-xl shadow-md border">
            <h2 className="text-2xl font-bold mb-4">Tags</h2>
            <TagList tags={allTags} />
          </div>
        </aside>
        <div className="flex-grow">
          <CardList data={data} />
        </div>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const databaseId = process.env.DATABASE_ID;

  // static 페이지에서는 throw new Error시 이전 버전의 페이지를 보여줌
  if (!databaseId) throw new Error("DATABASE_ID is not defined");

  const databaseItems = await getDatabaseItems(databaseId);
  const parsedData = parseDatabaseItems(databaseItems);

  const allTags = getAllTags(parsedData);
  console.log(allTags);
  return {
    props: {
      data: parsedData,
      allTags,
    },
  };
};
