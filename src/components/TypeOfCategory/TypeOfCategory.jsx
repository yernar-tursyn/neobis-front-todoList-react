import React, { useState } from 'react';
import '../TypeOfCategory/type-of-category.css';

export const TypeOfCategory = ({ setCategory, handleAddTodo }) => {
  const [checked, setChecked] = useState('radio-1');

  const handleRadioClick = (id) => {
    setChecked(id);
    setCategory(id);
  };

  return (
    <div>
      <div className="pick_category">
        <p className="create__todo-question">Выберите категорию</p>
        <div className="typesOf_category">
          <div className="bussiness-type">
            <div className="form_radio">
              <input
                id="radio-1"
                type="radio"
                name="radio"
                checked={checked === 'radio-1'}
                onChange={() => handleRadioClick('radio-1')}
              />
              <label htmlFor="radio-1">Бизнес</label>
            </div>
            <div className="form_radio">
              <input
                id="radio-2"
                type="radio"
                name="radio"
                checked={checked === 'radio-2'}
                onChange={() => handleRadioClick('radio-2')}
              />
              <label htmlFor="radio-2">Личное</label>
            </div>
          </div>
        </div>
      </div>
      <div className="add__btn">
        <button className="add__btn-click" onClick={handleAddTodo}>
          Добавить дело
        </button>
      </div>
    </div>
  );
};

export default TypeOfCategory;
