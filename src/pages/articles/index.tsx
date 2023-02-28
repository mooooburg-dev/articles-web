import React, { ChangeEvent, useState } from 'react';
import { GetStaticProps } from 'next';
import ArticleList from '~/components/articles/article-list';
import SearchContainer from '~/components/articles/search-container';
import { getAllDatas } from '~/helper/api-util';
import { useArticleStore } from '~/store/articleStore';
import { ArticleType } from '~/types';
import excuteQuery from '~/lib/db';

type Props = {
  // TODO: API 스키마 픽스 후 Type 재정의
  articles: ArticleType[];
};

export default function Articles({ articles }: Props) {
  const updateArticles = useArticleStore((state) => state.updateArticles);

  updateArticles && updateArticles(articles);

  const [searchTag, setSearchTag] = useState<string>('Frontend');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTag(e.target.value);
  };

  return (
    <div className="articles vh-1">
      <div className="inner ">
        <SearchContainer
          searchTag={searchTag}
          onSearch={getAllDatas}
          onChange={handleChange}
        />
        <ArticleList items={articles} />
      </div>
    </div>
  );
}

// SSG
export const getStaticProps: GetStaticProps = async () => {
  // const allArticles = await getAllDatas();
  // articles 전체 조회
  const result: any[] = await excuteQuery({
    query: 'SELECT * FROM pantagruel.CLIP_ARTICLE;',
  });

  const parseData = result.map((item) => {
    return { id: item.ID, title: item.TITLE, url: item.URL };
  });

  // res.status(200).json({ result: parseData });

  return {
    props: {
      articles: parseData,
    },
    revalidate: 60,
  };
};
