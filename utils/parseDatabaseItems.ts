import { CardData } from "./../types/types";
import { getDatabaseItems } from "./../cms/notion";

//getDatabaseItems의 return type이 await 이므로 Awaited를 씌워줌
export const parseDatabaseItems = (
  databaseItems: Awaited<ReturnType<typeof getDatabaseItems>>
) =>
  // 필터링도 하고 맵핑도 하고 새로운 배열을 만들거라 reduce 사용
  databaseItems.reduce<CardData[]>((acc, item) => {
    if (!("properties" in item)) return acc; // properties 없으면(=넘어온 값이 pageObjectResponse가 아닐때) 스킵

    const { Tags, Description, Published, Name } = item.properties;

    const cover =
      item.cover?.type === "external"
        ? item.cover.external.url
        : item.cover?.file
        ? item.cover.file.url
        : "";

    const title = Name?.type === "title" ? Name.title[0].plain_text : "";

    const description =
      Description.type === "rich_text"
        ? Description.rich_text[0]?.plain_text ?? ""
        : "";

    const published =
      Published?.type === "date" ? Published.date?.start ?? "" : "";

    const tags = Tags.type === "multi_select" ? Tags.multi_select : [];

    acc.push({
      id: item.id,
      cover,
      title,
      description,
      published,
      icon: item.icon,
      tags,
    });
    console.log(acc);

    return acc;
  }, []);
