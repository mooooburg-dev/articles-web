import { GetStaticProps } from 'next';
import React, { ChangeEvent, useState } from 'react';
import ArticleList from 'src/components/articles/article-list';
import SearchContainer from 'src/components/articles/search-container';
import { getAllDatas } from 'src/helper/api-util';

type Props = {
  // TODO: API 스키마 픽스 후 Type 재정의
  articles: any[];
};

export default function Articles({ articles }: Props) {
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
    revalidate: 60,
  };
};
