import React from "react";

// presentational component
const FilterLink = ({ filter, currentFilter, onClick, children }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
       onClick={e => {
         e.preventDefault();
         onClick(filter);
       }}
    >
      {children}
    </a>
  );
};

export default FilterLink