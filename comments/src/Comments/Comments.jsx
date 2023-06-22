import './Comments.css';
import React from 'react'

const Comments = ({data}) => {
    return (
        <div>
            <ul>
            {data.map((comment) => {
                return (
                    <li key={comment.id}>{comment.body}</li>
                )
            })}
            </ul>
        </div>
    )
}

export default Comments