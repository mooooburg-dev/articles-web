import React, { useState } from 'react';
import { getAllDatas } from 'src/helper/api-util';
import { useArticleStore } from 'src/store/articleStore';
import ArticleModal from './ArticleModal';
import Bottom from './Bottom';
import Content from './Content';
import Header from './Header';
import Navbar from './Navbar';

type Props = {
  children?: any;
};

export default function Layout({ children }: Props) {
  const { updateArticles } = useArticleStore((state: any) => state);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const createClickHandler = () => {
    setOpen(true);
  };

  const createArticleSuccess = async () => {
    const response = await getAllDatas();
    const data = response.result;

    updateArticles(data);
  };

  return (
    <div className="w-full">
      <Header />
      <Navbar onCreateClick={createClickHandler} />
      <Content>{children}</Content>
      <Bottom />
      <ArticleModal
        isOpen={open}
        onClose={handleClose}
        onCreateArticle={createArticleSuccess}
      />
    </div>
  );
}
