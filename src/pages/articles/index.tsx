import { Search } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import ArticleList from 'src/components/articles/article-list';

const url: string = 'https://jsonplaceholder.typicode.com/posts';

export default function Articles() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchMode, setSearchMode] = useState<boolean>(false);
  const [searchTag, setSearchTag] = useState<string>('');

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

  const handleSearchTagChange = (e: any) => {
    setSearchTag(e.target.value);
  };

  const handleSearchClick = useCallback(() => {
    setSearchMode(!searchMode);
  }, [setSearchMode, searchMode]);

  const handleSearchBlur = () => {
    setSearchMode(false);
  };

  useEffect(() => {
    if (searchMode) {
    } else {
    }
  }, [searchMode]);

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="articles vh-1">
      <div className="inner ">
        <div className="search-container">
          {searchMode ? (
            <div className="flex items-center">
              <TextField
                label="Search Tag"
                id="outlined-size-small"
                defaultValue="Front-end"
                size="small"
                onBlur={handleSearchBlur}
                onChange={handleSearchTagChange}
              />
              <IconButton>
                <Search fontSize="large" onClick={handleSearchClick} />
              </IconButton>
            </div>
          ) : (
            <div className="flex items-center" onClick={handleSearchClick}>
              <h2># Front-end</h2>
              <IconButton aria-label="delete">
                <Search fontSize="large" />
              </IconButton>
            </div>
          )}
        </div>
        <ArticleList items={data} />
      </div>
    </div>
  );
}
