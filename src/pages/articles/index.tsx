import { Search } from '@mui/icons-material';
import { Grid, IconButton, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

const url: string = 'https://jsonplaceholder.typicode.com/posts';

export default function Reviews() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchEnabled, setSearchEnabled] = useState<boolean>(false);
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

  const handleSearchClick = useCallback(() => {
    setSearchEnabled(!searchEnabled);
  }, [setSearchEnabled, searchEnabled]);

  const handleSearchBlur = () => {
    setSearchEnabled(false);
  };

  useEffect(() => {
    if (searchEnabled) {
    } else {
    }
  }, [searchEnabled]);

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="articles vh-1">
      <div className="inner ">
        <div className="search-container">
          {searchEnabled ? (
            <div className="flex items-center">
              <TextField
                label="Search Tag"
                id="outlined-size-small"
                defaultValue="Front-end"
                size="small"
                onBlur={handleSearchBlur}
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
        {data && (
          <div className="articles-data mt-4">
            <ul className=":not(:first-child)::mt-10">
              {data.map((post: any, idx: number) => (
                <li className={'mt-4 first:mt-4'} key={idx}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <div key={post.id} className="flex-row text-gray-400">
                        <div className="flex">
                          <span className="">{idx}.</span>
                          <span className="ml-2 ">▲</span>
                          <a href={post.url} target="_blank">
                            <p className="ml-2 font-bold text-gray-800">
                              {post.title}
                            </p>
                          </a>
                          <span className="ml-2 ">(naver.com)</span>
                        </div>
                        <div className="ml-10 flex-row text-sm">
                          <span className="">16 hits</span>
                          <span className="ml-4 ">mooooburg</span>
                          <span className="ml-4 ">1 month ago</span>
                          <span className="ml-4">
                            #프론트엔드 #백엔드 #React #Vue.js
                          </span>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
