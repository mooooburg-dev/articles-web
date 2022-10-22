import { GetStaticProps } from 'next';
import React from 'react';
import ArticleList from 'src/components/articles/article-list';
import { getAllDatas } from 'src/helper/api-util';
import { ArticleType } from 'src/types';

type Props = {
  // TODO: API 스키마 픽스 후 Type 재정의
  articles: ArticleType[];
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

// export const getStaticProps: GetStaticProps = async () => {
//   // TODO: 타입수정
//   const articles: any = await getAllDatas();
//   return {
//     props: {
//       articles: articles.result,
//     },
//     revalidate: 60,
//   };
// };
