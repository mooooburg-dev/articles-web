import React, { useEffect, useState } from 'react';
import { AssignmentTurnedInOutlined } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import { ArticleType } from 'src/types';
import { useForm } from 'react-hook-form';
import ArticleModal from '../layout/ArticleModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteArticle, getAllDatas } from 'src/helper/api-util';
import { useArticleStore } from 'src/store/articleStore';

type Props = {
  article: ArticleType;
  idx: number;
  onClipboadClick: () => void;
};

function ArticleItem({ article, idx, onClipboadClick }: Props) {
  const { updateArticles } = useArticleStore((state: any) => state);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [item, setItem] = useState<ArticleType>(article);

  const {
    register,
    formState: { errors },
  } = useForm();

  const handleUpdateArticle = (item: ArticleType) => setItem(item);

  const handleDeleteClick = async () => {
    const response = await deleteArticle({ id: item.id! });

    if (response) {
      updateArticleList();
    }
  };

  const updateArticleList = async () => {
    const response = await getAllDatas();
    const data = response.result;
    updateArticles(data);
  };

  const init = () => {
    register('title', { value: item.title });
    register('url', { value: item.url });
  };

  useEffect(init, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <ArticleModal
          article={item}
          isOpen={open}
          onUpdateArticle={handleUpdateArticle}
          onClose={handleClose}
        />
        <div key={item.id} className="flex-row text-gray-400">
          <div className="flex items-start">
            <div className="mt-1">
              <span>{idx}.</span>
              <span className="ml-2">▲</span>
              <span className="px-1 py-0">
                <IconButton
                  style={{ padding: 0 }}
                  aria-label="assignment-turned-in"
                  color="success"
                  onClick={onClipboadClick}
                >
                  <AssignmentTurnedInOutlined />
                </IconButton>
              </span>
            </div>
            <div>
              <div className="flex items-center">
                <a href={item.url} target="_blank">
                  <p className="font-bold text-gray-800">{item.title}</p>
                </a>
                <span className="ml-2 ">{item.url}</span>
                <div>
                  <IconButton onClick={handleOpen}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton onClick={handleDeleteClick}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
              <div className="flex-row text-sm">
                <span className="">16 hits</span>
                <span className="ml-4">mooooburg</span>
                <span className="ml-4">2months ago</span>
                <span className="ml-4 break-words">
                  #프론트엔드 #백엔드 #React #Vue.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default ArticleItem;
