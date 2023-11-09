import React from 'react';

function SearchFilter({ setFilterString }) {
  const [searchInput, setSearchInput] = React.useState('');

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        setFilterString(searchInput);
      }}
    >
      <label htmlFor="search"></label>
      <input
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        type="text"
        name="search"
        id="search"
        placeholder="search a meowsy..."
        className="px-3 py-2 border-solid border-2 border-gray-500 rounded mx-2 md:w-1/3 sm:w-5/6"
      />
      <button>🔍</button>
    </form>
  );
}

export default SearchFilter;
