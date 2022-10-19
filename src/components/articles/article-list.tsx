import { Fragment } from 'react';
import { ArticleType } from 'src/types';
import ArticleItem from './article-item';

type Props = {
  items: ArticleType[];
};

export default function ArticleList({ items }: Props) {
  // TODO: 클립보드 저장
  const handleClipboardClick = () => {};

  return (
    <Fragment>
      {items && (
        <div className="articles-data mt-4">
          <ul className=":not(:first-child)::mt-10">
            {items.map((article: any, idx: number) => (
              <li className={'mt-4 first:mt-4'} key={idx}>
                <ArticleItem
                  article={article}
                  idx={idx}
                  onClipboadClick={handleClipboardClick}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
}
