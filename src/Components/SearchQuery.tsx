import React, { useState } from 'react';
import { InputField1 } from './Styled Components/AppStyle';

interface SearchQueryProps {
  onSearch: (searchQuery: string) => void;
}

const SearchQuery: React.FC<SearchQueryProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the onSearch callback with the search query
  };

  return (
    <InputField1
        width='24%'
        fontSize='15px'
        type="text"
        id="table-search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchInputChange}
        style={{margin: '10px'}}
    />
  );
};

export default SearchQuery;
