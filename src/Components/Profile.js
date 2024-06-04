import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import PostItem from './PostItem'
const Profile = () => {
    const profile = {
        name: "Srushti Engineer"
    }
    const follow_details = {
        followers: 800,
        following: 400
    }
    const about = "A simple person with great interest in mythology, philosophy and travelling. Love exploring new places!"
    const posts=[
        {
            num:1,
            image:"/img/forest.jpg",
            num_likes:50,
            comments:[
                {
                    num:1,
                    commentator:"Shreya Suthar",
                    content:"beautiful view..."
                },
                {
                    num:2,
                    commentator:"Suhani Mehta",
                    content:"Nature!"
                }
            ]
        },
        {
            num:2,
            image:"/img/nyc.jpg",
            num_likes:80,
            comments:[
                {
                    num:1,
                    commentator:"Krisha Patel",
                    content:"City vibes!"
                },
                {
                    num:2,
                    commentator:"Krisha Engineer",
                    content:"Fabulous photo!"
                }
            ]
        },
        {
            num:3,
            image:"/img/fair.jpg",
            num_likes:10,
            comments:[
            ]
        }
    ]
    return (
        <>
            <div className='main_outer'>
                <div className='profile_outer'>
                    <div className='upper'>
                    </div>
                    <div className='profile_intro'>

                        <div className='profile_item'>
                            <div className='photo'></div>
                        </div>
                        <div className='profile_item' id='name'>
                            {profile.name}
                        </div>
                    </div>
                </div>

                <div className='middle_outer'>
                    <div className='details'>
                        <div className='follow_details'>
                            {follow_details.followers}<br />followers
                        </div>
                        <div className='follow_details'>
                            {follow_details.following}<br />following
                        </div>

                    </div>
                    <div className='details'>
                        <div className='about_heading'>
                            About
                        </div>
                        <div className='about_content'>
                            {about}
                        </div>
                    </div>
                </div>

                <div className='socialmedia_links'>
                    <div className='social_head'>
                        Social Media Links
                    </div>
                    <div className='links_content'>
                        <Link className='fa fa-facebook' to={'https://www.facebook.com/'}>
                        </Link> &nbsp;
                        <Link className='fa fa-instagram' to={'https://www.instagram.com/'}>
                        </Link> &nbsp;
                        <Link className='fa fa-linkedin' to={'https://www.linkedin.com/'}>
                        </Link> &nbsp;
                        <Link className='fa fa-twitter' to={'https://x.com/?lang=en'}>
                        </Link> &nbsp;
                    </div>
                </div>

                <div className='posts_header'>
                    Posts
                </div>
                {
                    posts.map((post)=>{
                        return <PostItem key={post.num} post={post}/>
                    })
                }
                {/* <div className='postitem'>
                    <div className='post_img'>
                    </div>
                    <div className='post_details'>
                        <Link className='fa fa-heart'>
                        </Link>
                        &nbsp; &nbsp;
                        <div className='like_num'>
                            30
                        </div>
                        <div className='comments_header'>
                            Comments
                        </div>
                        <div className='commentitem' style={{marginTop:"-20px"}}>
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
                        </div>
                        
                        <input type='text' placeholder='comment here...' className='user_comment'>
                        </input>
                    </div>

                </div> */}


            </div>
        </>
    )
}

export default Profile
