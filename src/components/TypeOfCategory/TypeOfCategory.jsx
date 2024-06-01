import React from 'react'
import { useState } from 'react';
import '../TypeOfCategory/type-of-category.css'

export const TypeOfCategory = () => {
    const [checked, setChecked] = useState(null);

    const handleRadioClick = (id) => {
        setChecked(prev => (prev === id ? null : id));
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
                                name="radio"
                                checked={checked === 'radio-1'}
                                onChange={() => handleRadioClick('radio-1')}
                            />
                            <label htmlFor="radio-1">Business</label>
                        </div>
                        <div className="form_radio">
                            <input
                                id="radio-2"
                                type="radio"
                                name="radio"
                                checked={checked === 'radio-2'}
                                onChange={() => handleRadioClick('radio-2')}
                            />
                            <label htmlFor="radio-2">Personal</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add__btn">
                <button className="add__btn-click">Add todo</button>
            </div>
        </div>
    )
}


export default TypeOfCategory