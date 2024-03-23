import React from 'react';

function Search({ value, onChange }) {
  return (
    <input type="text" value={value} onChange={onChange} placeholder="Search..." />
  );
}

export default Search;
