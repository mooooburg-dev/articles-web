import { ArticleType } from 'src/types';

// const url: string = 'https://jsonplaceholder.typicode.com/posts';
const url: string = 'http://localhost:8090/api/articles';

// article 전체 조회
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

// article 단일 수정
export async function updateArticle(param: ArticleType) {
  const response = await fetch('http://localhost:8090/api/articles', {
    method: 'PATCH',
    body: JSON.stringify(param),
  });

  const data = await response.json();

  return data;
}

// 클립보드 저장
export async function addClipboard() {
  const response = fetch(url, { method: 'POST' });
  return {};
}
