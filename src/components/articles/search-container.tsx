import { Search } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

type Props = {
  searchTag: string;
  onSearch: (tag: string) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchContainer = ({ searchTag, onSearch, onChange }: Props) => {
  const [searchMode, setSearchMode] = useState<boolean>(false);
  const tagInputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    if (searchMode) {
      if (searchTag !== '') {
        onSearch(searchTag);
      } else {
        console.log('태그를 확인하세요');
      }
    } else {
    }
    setSearchMode(!searchMode);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchTag !== '') {
      setSearchMode(!searchMode);
      onSearch(searchTag);
    }
  };

  useEffect(() => {
    if (searchMode) {
      tagInputRef.current?.focus();
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
            onChange={onChange}
            onKeyDown={handleKeyDown}
            inputRef={tagInputRef}
          />
          <IconButton onClick={handleSearchClick}>
            <Search fontSize="large" />
          </IconButton>
        </div>
      ) : (
        <div className="inline-flex items-center" onClick={handleSearchClick}>
          <h2># {searchTag}</h2>
          <IconButton>
            <Search fontSize="large" />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
