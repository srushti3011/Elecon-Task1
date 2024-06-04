import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'
import CommentItem from './CommentItem'
const PostItem = (props) => {
    const {post} = props
    return (
        <>
            <div className='postitem'>
                <div className='post_img' style={{
                    backgroundImage: `url(${post.image})`
                }}>
                </div>
                <div className='post_details'>
                    <Link className='fa fa-heart'>
                    </Link>
                    &nbsp; &nbsp;
                    <div className='like_num'>
                        {post.num_likes}
                    </div>
                    <div className='comments_header' style={{
                        marginBottom:"-5px"
                    }}>
                        Comments
                    </div>
                    {
                        post.comments.map((comment)=>{
                            return <CommentItem key={comment.num} comment={comment} />
                        })
                    }
                    {/* <div className='commentitem' style={{ marginTop: "-20px" }}>
                        <div className='commentby'>
                            ABC
                        </div>
                        <div className='comment_content'>
                            Wow
                        </div>
                    </div>
                    <div className='commentitem'>
                        <div className='commentby'>
                            DEF
                        </div>
                        <div className='comment_content'>
                            Nice
                        </div>
                    </div> */}

                    <input type='text' placeholder='comment here...' className='user_comment'>
                    </input>
                </div>

            </div>
        </>
    )
}

export default PostItem
