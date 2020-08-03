import React from 'react';
import PropTypes from 'prop-types';

export const CategoryList = (props) => {
  const { categories, title } = props;
  return (
    <div className="public-category-list">
      <p className="public-category-list--title">
        {title}
      </p>
      <div className="public-category-list--content">
        {categories}
      </div>
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  title: PropTypes.string,
};
