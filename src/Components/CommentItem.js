import React from 'react'
import './Profile.css'
const CommentItem = (props) => {
    const {comment} = props
    return (
        <>
            <div className='commentitem' style={{ marginTop: "-20px" }}>
                <div className='commentby'>
                    {comment.commentator}
                </div>
                <div className='comment_content'>
                    {comment.content}
                </div>
            </div>
        </>
    )
}

export default CommentItem
