// 외부에서 데이터 가져옴
import { Client } from "@notionhq/client";

export const propertyTable = {
  Public: "Public",
  Published: "Published",
};

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabaseItems = async (databaseId: string) => {
  const databaseItems = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: propertyTable.Public,
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: propertyTable.Published,
        direction: "descending",
      },
    ],
  });

  return databaseItems.results;
};
