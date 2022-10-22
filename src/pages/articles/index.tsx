import { GetStaticProps } from 'next';
import React, { ChangeEvent, useEffect, useState } from 'react';
import ArticleList from 'src/components/articles/article-list';
import SearchContainer from 'src/components/articles/search-container';
import { getAllDatas } from 'src/helper/api-util';
import { useArticleStore } from 'src/store/articleStore';
import { ArticleType } from 'src/types';
import create from 'zustand';

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
  const allArticles = await getAllDatas();

  return {
    props: {
      articles: allArticles.result,
    },
    pageProps: {
      articles: allArticles.result,
    },
    revalidate: 60,
  };
};
