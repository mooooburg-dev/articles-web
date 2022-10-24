import { ArticleType } from 'src/types';

// const url: string = 'https://jsonplaceholder.typicode.com/posts';
console.log(
  `process.env.NEXT_PUBLIC_VERCEL_URL: ${process.env.NEXT_PUBLIC_VERCEL_URL}`
);
const url: string = `${
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_API_URL
}/api/articles`;

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
  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(param),
  });

  const data = await response.json();

  return data;
}

// article 등록
export async function createArticle(param: ArticleType) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(param),
  });

  const data = await response.json();

  return data;
}

type DeleteArticleType = {
  id: number;
};
export async function deleteArticle(param: DeleteArticleType) {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(param),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { error };
  }
}

// 클립보드 저장
export async function addClipboard(param: ArticleType) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(param),
  });

  const data = await response.json();

  return data;
}
