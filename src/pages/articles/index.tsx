import React, { ChangeEvent, useState } from 'react';
import { GetServerSideProps } from 'next';
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

// SSR
export const getServerSideProps: GetServerSideProps = async () => {
  const allArticles = await getAllDatas();

  return {
    props: {
      articles: allArticles.result,
    },
  };
};
