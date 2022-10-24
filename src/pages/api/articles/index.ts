import { NextApiRequest, NextApiResponse } from 'next';
import excuteQuery from 'src/lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // articles 전체 조회
  if (req.method === 'GET') {
    const result: any[] = await excuteQuery({
      query: 'SELECT * FROM pantagruel.CLIP_ARTICLE;',
    });

    const parseData = result.map((item) => {
      return { id: item.ID, title: item.TITLE, url: item.URL };
    });

    res.status(200).json({ result: parseData });
  }

  // article 추가
  if (req.method === 'POST') {
    const { title, url } = JSON.parse(req.body);

    const result: any[] = await excuteQuery({
      query: `INSERT pantagruel.CLIP_ARTICLE SET TITLE="${title}", URL="${url}";`,
    });

    if (result) res.status(200).json({ result: 'success' });
  }

  // article 삭제
  if (req.method === 'DELETE') {
    const { id } = JSON.parse(req.body);

    const result: any[] = await excuteQuery({
      query: `DELETE FROM pantagruel.CLIP_ARTICLE WHERE ID="${id}";`,
    });

    if (result) res.status(200).json({ result: 'success' });
  }

  // article 단일 수정
  if (req.method === 'PATCH') {
    const { id, title, url } = JSON.parse(req.body);
    const result: any[] = await excuteQuery({
      query: `UPDATE pantagruel.CLIP_ARTICLE SET TITLE="${title}", URL="${url}" WHERE ID="${id}";
      SELECT * FROM pantagruel.CLIP_ARTICLE WHERE ID="${id}";`,
    });

    const resultData = { ...result[1][0] };
    const parseData = {
      id: resultData.ID,
      title: resultData.TITLE,
      url: resultData.URL,
    };

    if (result) res.status(200).json({ result: parseData });
  }
}
