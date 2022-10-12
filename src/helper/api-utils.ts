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
