import { Search } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';

export default function SearchContainer() {
  const [searchMode, setSearchMode] = useState<boolean>(false);
  const [searchTag, setSearchTag] = useState<string>('FrontEnd');
  const tagInputRef = useRef<HTMLInputElement>(null);

  const handleSearchTagChange = (e: any) => {
    setSearchTag(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchMode(!searchMode);
  };

  const handleSearchBlur = () => {
    setSearchMode(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchMode(!searchMode);
    }
  };

  useEffect(() => {
    if (searchMode) {
      tagInputRef.current?.focus();
    } else {
    }
  }, [searchMode]);

  return (
    <div className="search-container">
      {searchMode ? (
        <div className="flex items-center">
          <TextField
            label="Search Tag"
            id="outlined-size-small"
            defaultValue={searchTag}
            size="small"
            onBlur={handleSearchBlur}
            onChange={handleSearchTagChange}
            onKeyDown={handleKeyDown}
            inputRef={tagInputRef}
          />
          <IconButton onClick={handleSearchClick}>
            <Search fontSize="large" />
          </IconButton>
        </div>
      ) : (
        <div className="flex items-center" onClick={handleSearchClick}>
          <h2># {searchTag}</h2>
          <IconButton aria-label="delete">
            <Search fontSize="large" />
          </IconButton>
        </div>
      )}
    </div>
  );
}
