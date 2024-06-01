import React from 'react'
import '../TodoLists/todolists.css'

export const TodoLists = () => {

    return (
      <div className="todo__lists">
        <p className="create__todo-text">TODO LIST</p>
        <div className="form_radio_lists">
            <div className="labels">
                <input id="radio-1" type="radio" name="radio" value="1" />
                <label htmlFor="radio-1">Complete Task 1</label>
            </div>
            <div className="form-radio-btn">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
            </div>
        </div>
      </div>
    )
}
