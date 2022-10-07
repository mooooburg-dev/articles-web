import { Search } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import ArticleList from 'src/components/articles/article-list';
import SearchContainer from 'src/components/articles/search-container';

const url: string = 'https://jsonplaceholder.typicode.com/posts';

export default function Articles() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => setError(`error: ${error}`));
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="articles vh-1">
      <div className="inner ">
        <SearchContainer />
        <ArticleList items={data} />
      </div>
    </div>
  );
}
