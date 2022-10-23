import { rest } from 'msw';
import articles from 'https://jsonplaceholder.typicode.com/posts';

export const handlers = [
  // rest.get('/login', async (req, res, ctx) => {
  //   return res(
  //     ctx.json({
  //       title: 'Lord of the Rings',
  //       imageUrl: '/book-cover.jpg',
  //       description:
  //         'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
  //     })
  //   );
  // }),
  rest.get(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/articles`,
    async (req, res, ctx) => {
      return res(ctx.json(articles));
    }
  ),
];
