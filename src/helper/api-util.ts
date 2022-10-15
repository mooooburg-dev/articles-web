const url: string = 'https://jsonplaceholder.typicode.com/posts';

export async function getAllDatas() {
  const response = await fetch(url);
  const data = await response.json();

  // const articles = [];
  // for(const key in data) {
  //   articles.push({

  //   })
  // }
  return data;
}

export async function getClipboardDatas() {
  const allDatas = getAllDatas();

  // TODO: 클립보드 데이터 필터 추가
  return allDatas;
}
