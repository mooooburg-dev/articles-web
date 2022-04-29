import React, { useState } from 'react';

const url: string = 'https://jsonplaceholder.typicode.com/posts';

export default function Index() {
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

  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleClick2}>데이터 가져오기2</button>
      {data && (
        <ul>
          {data.map((post: any) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </ul>
      )}
    </div>
  );
}
