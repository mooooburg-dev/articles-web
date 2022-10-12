import { GetStaticProps } from 'next';
import React, { ChangeEvent, useState } from 'react';
import ArticleList from 'src/components/articles/article-list';
import SearchContainer from 'src/components/articles/search-container';
import { getAllDatas } from 'src/helper/api-utils';

export default function Articles(props: any) {
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
        <ArticleList items={props.datas} />
      </div>
    </div>
  );
}

// SSG
export const getStaticProps: GetStaticProps = async () => {
  const datas = await getAllDatas();
  return {
    props: {
      datas,
    },
    revalidate: 60,
  };
};
