import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const url: string = 'https://jsonplaceholder.typicode.com/posts';

export default function Reviews() {
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

  const handleClick2 = () => {
    fetch('/login')
      .then((response) => response.json())
      .then((json) => console.log(JSON.stringify(json)));
  };

  if (error) {
    return <p>{error}</p>;
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="reviews vh-1">
      <div className="inner ">
        <h3>#Front-end</h3>
        {data && (
          <ul className=":not(:first-child)::mt-10">
            {data.map((post: any, idx: number) => (
              <li className={'mt-4 first:mt-4'}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <a href="www.naver.com">
                      <div key={post.id} className="flex-row text-gray-400">
                        <div className="flex">
                          <span className="">{idx}.</span>
                          <span className="ml-2 ">▲</span>
                          <p className="ml-2 text-gray-800 font-bold">
                            {post.title}
                          </p>
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
                    </a>
                  </Grid>
                </Grid>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
