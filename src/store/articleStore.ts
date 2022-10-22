import { ArticleType } from 'src/types';
import create from 'zustand';

export interface ArticleStoreType {
  articles?: ArticleType[];
  updateArticles?: (items: ArticleType[]) => void;
}

export const useArticleStore = create<ArticleStoreType>((set) => ({
  articles: [],
  updateArticles: (items: ArticleType[]) => set(() => ({ articles: items })),
}));
