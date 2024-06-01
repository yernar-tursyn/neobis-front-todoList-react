import React from 'react'
import '../TitleInput/title-input.css'

export const TitleInput = () => {
  return (
    <div className='title'>
         <div className="title__name">
            <p className="paragpraph-text">
                What's up, <input className="title__name-input" type="text" />
            </p>
        </div>
            <div className="create__todo">
                <p className="create__todo-text">CREATE A TODO</p>
                <p className="create__todo-question">What's on your todo list?</p>
                <input className="create__todo-input" type="text" placeholder="e.g. get a milk" />
            </div>
    </div>
  )
}

export default TitleInput