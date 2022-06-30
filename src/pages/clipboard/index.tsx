import React, { useEffect, useState } from 'react';

const url: string = '';

export default function Clipboard() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const getClipboardDatas = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => setError(`error: ${error}`));
  };

  const init = () => {
    console.log('init');
  };

  useEffect(init, []);

  return <h2>Clipboard</h2>;
}
