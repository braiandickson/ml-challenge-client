import React from 'react';

import chevron from '../../assets/Categories/chevron.svg';

const Categories = ({ categories }) =>
  categories && (
    <div className="row full-width categories">
      {categories.map((categorie) => (
        <div key={categorie} className="row categorie">
          {categories[0] !== categorie && (
            <img
              className="categorie__chevron"
              src={chevron}
              alt="chevron icon"
            />
          )}
          <span className="categorie__name">{categorie}</span>
        </div>
      ))}
    </div>
  );

export default Categories;
