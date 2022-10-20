import { NextApiRequest, NextApiResponse } from 'next';
import excuteQuery from 'src/lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // articles 조회
  if (req.method === 'GET') {
    const result: any[] = await excuteQuery({
      query: 'SELECT * FROM pantagruel.CLIP_ARTICLE',
    });

    const parseData = result.map((item) => {
      return { id: item.ID, title: item.TITLE };
    });

    res.status(200).json({ result: parseData });
  }

  // article 추가
  if (req.method === 'POST') {
  }
}
