// const url: string = 'https://jsonplaceholder.typicode.com/posts';
const url: string = 'http://localhost:8090/api/articles';

export async function getAllDatas() {
  const response = await fetch(url, {
    method: 'GET',
  });
  const data = await response.json();

  return data;
}

export async function getClipboardDatas() {
  const allDatas = getAllDatas();

  // TODO: 클립보드 데이터 필터 조회 추가
  return allDatas;
}

// 클립보드 저장
export async function addClipboard() {
  const response = fetch(url, { method: 'POST' });
  return {};
}
