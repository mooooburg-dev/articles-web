import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import ArticleList from 'src/components/articles/article-list';
import { getClipboardDatas } from 'src/helper/api-util';

type Props = {
  // TODO: API 스키마 픽스 후 Type 재정의
  articles: any[];
};

export default function Clipboard({ articles }: Props) {
  return (
    <div className="articles vh-1">
      <h2>Clipboard</h2>
      <div className="inner ">
        <ArticleList items={articles} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const clipArticles = await getClipboardDatas();
  return {
    props: {
      articles: clipArticles,
    },
    revalidate: 60,
  };
};
