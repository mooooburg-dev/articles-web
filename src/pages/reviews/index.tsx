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
        {data && (
          <ul>
            {data.map((post: any) => (
              <Grid container spacing={2}>
                <Grid item xs={4} sm={2}>
                  <div>
                    <img src="https://mui.com/static/ads-in-house/scaffoldhub.png"></img>
                  </div>
                </Grid>
                <Grid item xs={8} sm={10}>
                  <div key={post.id} className={'mb-20'}>
                    <p className="font-bold text-teal-700 ">{post.title}</p>
                    <p>{post.body}</p>
                  </div>
                </Grid>
              </Grid>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
