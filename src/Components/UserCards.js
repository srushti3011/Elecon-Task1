import React from 'react'
import UserCardItem from './UserCardItem';
import './UserCards.css'
import { Link } from 'react-router-dom';

const UserCards = () => {
    const users = [
        {
          background: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29yayUyMGRlc2t8ZW58MHx8MHx8fDA%3D', 
          avatar: 'https://thumbs.dreamstime.com/b/company-recruiter-business-hr-office-manager-job-young-professional-female-holding-paper-resume-application-form-118050886.jpg',
          name: 'Vanshika Modi',
          jobTitle: 'Sales Representative',
          social: {
            facebook: 'https://facebook.com',
            instagram: 'https://instagram.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
          },
          stats: {
            followers: '9.9k',
            following: '1.9k',
            posts: '9.12k',
          },
        },
        {
          background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJSTsrxmZR49JfE9AMLASlj6I_0KqgXSBjNmJ16FIeNQ7G11IKh-r65gzAyJhzX3jn9M&usqp=CAU', 
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7aQXXia6V4Sx4PlVWdAi9wUwEoTxt8oOPuI__1ybsxfnUDNcWx9-uLvNOO-zuAzmdgM&usqp=CAU',
          name: 'Srushti Eng.',
          jobTitle: 'Customer Service Associate',
          social: {
            facebook: 'https://facebook.com',
            instagram: 'https://instagram.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
          },
          stats: {
            followers: '1.95k',
            following: '9.12k',
            posts: '6.9k',
          },
        },
        {
          background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNqlBk6uViQDRHrCXgFokA3lLGiG_jEN2us03-_w2dfPKMlzWZ7kuZcfJGXWfn-zdHxY&usqp=CAU', 
          avatar: 'https://img.freepik.com/premium-photo/businessman-boss-executive-company-office-look-camera-wear-suit-tie-smart-handsome-smile-happy-work-job-career-human-person-male-portrait-model-employee-white-isolated-background-copy-space_178037-490.jpg',
          name: 'Dhruven Gohil',
          jobTitle: 'Content Strategist',
          social: {
            facebook: 'https://facebook.com',
            instagram: 'https://instagram.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
          },
          stats: {
            followers: '9.12k',
            following: '6.98k',
            posts: '8.4k',
          },
        },
        {
          background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGjAIQU9sVqQ0CEFmzZkZRsgUhSOILV5aneNYq4BM7o8TkmzM0eUh2McjWV29RkTUqQ4w&usqp=CAU', 
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlzlNN5za4HfNelUPTij9uP83GiEItwjnet8Wnf77GDC0jEeIa_4HSvOpqYpzpL7kswI&usqp=CAU',
          name: 'Janki Patel',
          jobTitle: 'Software Developer',
          social: {
            facebook: 'https://facebook.com',
            instagram: 'https://instagram.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
          },
          stats: {
            followers: '12.4k',
            following: '8.2k',
            posts: '5.7k',
          },
        },
        {
          background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-XctSaGe7x6cndaNlqD6ZipIPTiW8cZwJkzhrgQ7S0NqshRRkRRrA8ArDQQtl9mqhx8&usqp=CAU',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55ePX79i8x2zg40Q2f5rikZRS9vaDUqVj2w&s',
          name: 'Maitry Panchal',
          jobTitle: 'Creative Director',
          social: {
            facebook: 'https://facebook.com',
            instagram: 'https://instagram.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
          },
          stats: {
            followers: '7.5k',
            following: '3.2k',
            posts: '4.9k',
          },
        },
        {
          background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5u_kSht5aBaCzKtM5zasWNzzfUnolZsOjx1snQPmNeQNlH0ej1OrVFN8SsDsuF11gyQ&usqp=CAU',
          avatar: 'https://plus.unsplash.com/premium_photo-1661671887116-40ec0e3decb6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name: 'Vidhi Pankhaniya',
          jobTitle: 'Creative Director',
          social: {
            facebook: 'https://facebook.com',
            instagram: 'https://instagram.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
          },
          stats: {
            followers: '6.3k',
            following: '2.4k',
            posts: '7.8k',
          },
        },
      ];    
  return (
    <>
        <header className="dashboard-header" id='card-header'>
        <h1>User Cards</h1>
        <div className="breadcrumb">
          {/* <span>Dashboard</span> &gt; <span>User</span> &gt; <span>Cards</span> */}
        </div>
        <button className="new-user-button"><Link to={'/createuser'} className='new-user'>+ New User</Link></button>
      </header>
      <div className="user-cards-container">
        {users.map((user, index) => (
          <UserCardItem key={index} user={user} />
        ))}
      </div>
    </>
  )
}

export default UserCards
