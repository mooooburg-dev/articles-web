import { Search } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function SearchContainer() {
  const [searchMode, setSearchMode] = useState<boolean>(false);
  const [searchTag, setSearchTag] = useState<string>('');

  const handleSearchTagChange = (e: any) => {
    setSearchTag(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchMode(!searchMode);
  };

  const handleSearchBlur = () => {
    setSearchMode(false);
  };

  useEffect(() => {
    if (searchMode) {
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
            defaultValue="Front-end"
            size="small"
            onBlur={handleSearchBlur}
            onChange={handleSearchTagChange}
          />
          <IconButton>
            <Search fontSize="large" onClick={handleSearchClick} />
          </IconButton>
        </div>
      ) : (
        <div className="flex items-center" onClick={handleSearchClick}>
          <h2># Front-end</h2>
          <IconButton aria-label="delete">
            <Search fontSize="large" />
          </IconButton>
        </div>
      )}
    </div>
  );
}
