import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal as MaterialModal,
  TextField,
} from '@mui/material';
import { ArticleType } from 'src/types';
import { useForm } from 'react-hook-form';
import { createArticle, updateArticle } from 'src/helper/api-util';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  article?: ArticleType;
  isOpen: boolean;
  onUpdateArticle?: (item: ArticleType) => void;
  onCreateArticle?: (item: ArticleType) => void;
  onClose: () => void;
};
export default function ArticleModal({
  article,
  isOpen = false,
  onUpdateArticle,
  onCreateArticle,
  onClose,
}: Props) {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.name, e.target.value);
  };

  const handleSubmitClick = async () => {
    article ? handleUpdateArticle() : handleCreateArticle();
  };

  const handleUpdateArticle = async () => {
    const response = await updateArticle({
      id: article?.id,
      title: getValues('title'),
      url: getValues('url'),
    });

    onUpdateArticle && onUpdateArticle(response.result);
    onClose();
  };

  const handleCreateArticle = async () => {
    const response = await createArticle({
      title: getValues('title'),
      url: getValues('url'),
    });

    onCreateArticle && onCreateArticle(response.result);
    onClose();
  };

  return (
    <MaterialModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form>
        <Box sx={style} textAlign="center">
          <div className="w-100 flex items-center">
            <span className="mr-4">제목</span>
            <div className="w-80">
              <TextField
                name="title"
                defaultValue={article?.title}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          <div className="w-100 mt-4 flex items-center">
            <span className="mr-4">주소</span>
            <div className="w-80">
              <TextField
                name="url"
                defaultValue={article?.url}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          <div className="mt-4">
            <Button
              variant="contained"
              onClick={handleSubmitClick}
              className="bg-cyan-500"
            >
              {article ? '수정' : '등록'}
            </Button>
            <Button variant="outlined" className="ml-4" onClick={onClose}>
              취소
            </Button>
          </div>
        </Box>
      </form>
    </MaterialModal>
  );
}
