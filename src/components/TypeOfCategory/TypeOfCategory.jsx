import React, { useState } from 'react';
import '../TypeOfCategory/type-of-category.css';

export const TypeOfCategory = ({ setCategory, handleAddTodo }) => {
  const [checked, setChecked] = useState('business');

  const handleRadioClick = (category) => {
    setChecked(category);
    setCategory(category);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div>
      <div className="pick_category">
        <p className="create__todo-question">Pick a category</p>
        <div className="typesOf_category">
          <div className="bussiness-type">
            <div className="form_radio">
              <input
                id="radio-1"
                type="radio"
                name="category"
                checked={checked === 'business'}
                onChange={() => handleRadioClick('business')}
                className="business-radio"
              />
              <label htmlFor="radio-1">Business</label>
            </div>
            <div className="form_radio">
              <input
                id="radio-2"
                type="radio"
                name="category"
                checked={checked === 'personal'}
                onChange={() => handleRadioClick('personal')}
                className="personal-radio"
              />
              <label htmlFor="radio-2">Personal</label>
            </div>
          </div>
        </div>
      </div>
      <div className="add__btn">
        <button className="add__btn-click" onClick={handleAddTodo} onKeyPress={handleKeyPress}>
          Add todo
        </button>
      </div>
    </div>
  );
};

export default TypeOfCategory;
