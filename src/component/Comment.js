import React from 'react'
import '../styles/scss/comment.scss'

const Comment = ({comment}) => {
    return (
        <div className="comment-container">
            <div className="username-section">
                <h5>{comment.user.username}</h5>
            </div>
            <div className="content-section">
                <span>{comment.content}</span>
            </div>
        </div>
    )
}

export default Comment