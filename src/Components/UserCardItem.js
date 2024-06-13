import React from 'react'
import './UserCardItem.css'

const UserCardItem = ({user}) => {
    return (
        <>
            <div className="user-card">
                <div className="card-background" style={{ backgroundImage: `url(${user.background})` }}>
                    <img src={user.avatar} alt={`${user.name}'s avatar`} className="user-avatar" />
                </div>
                <div className="user-info">
                    <h2 id='user-name'>{user.name}</h2>
                    <p id='font-500'>{user.jobTitle}</p>
                    <div className="social-icons">
                        <a href={user.social.facebook}><i className="fa fa-facebook"></i></a>
                        <a href={user.social.instagram}><i className="fa fa-instagram"></i></a>
                        <a href={user.social.linkedin}><i className="fa fa-linkedin"></i></a>
                        <a href={user.social.twitter}><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
                <div className="user-stats">
                    <div>
                        <h3>{user.stats.followers}</h3>
                        <p id='font-500'>Followers</p>
                    </div>
                    <div>
                        <h3>{user.stats.following}</h3>
                        <p id='font-500'>Following</p>
                    </div>
                    <div>
                        <h3>{user.stats.posts}</h3>
                        <p id='font-500'>Total Posts</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCardItem
