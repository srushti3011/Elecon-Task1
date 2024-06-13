import React, { useState } from 'react'
import jobContext from './JobContext'

const JobState = (props) => {

    const [jobClicked, setJobClicked]=useState({
        num:0,
        company:"",
        company_overview:"",
        location:"",
        type:"",
        title:"",
        form:"",
        description:"",
        key_responsibilities:"",
        minimum_qualifications:"",
        technology:"",
        hourly_wage:""
    })

    const jobs = [
        {
            num:1,
            company : "Google",
            company_overview:"Google is a global leader in technology innovation, dedicated to organizing the world's information and making it universally accessible and useful. Our diverse team of engineers, designers, and professionals work on solving some of the most complex challenges in the tech industry, delivering products and services that impact billions of users worldwide.",
            location: "Hyderabad",
            type: "Hybrid",
            title: "SDE-1",
            form:"fulltime",
            description: "As a Software Development Engineer (SDE-1) at Google, you will be part of a dynamic and innovative team responsible for designing, developing, testing, and maintaining software applications. This entry-level position offers the opportunity to work on cutting-edge technology projects, contributing to the development of scalable and high-performance systems.",
            key_responsibilities:"Design and Development, Coding, Testing and Debugging, Code Review, Documentation, Collaboration, Continuous Improvement",
            minimum_qualifications:"Bachelor’s degree in Computer Science, Engineering, or a related field, or equivalent practical experience. Proficiency in one or more programming languages such as Java, Python, C++, or Go. Strong understanding of computer science fundamentals, including algorithms, data structures, and software design principles. Experience with software development tools and methodologies, including version control systems (e.g., Git), integrated development environments (IDEs), and debugging tools. Excellent problem-solving skills and the ability to work independently and as part of a team.",
            technology: "DART, MERN Stack",
            hourly_wage:"$55"
        },
        {
            num:2,
            company : "Amazon",
            company_overview:"Amazon is a global leader in e-commerce and cloud computing, dedicated to delivering the best customer experience through continuous innovation. Our teams of talented engineers work on a wide range of technologies and platforms that serve millions of customers worldwide, driving the future of digital services and products.",
            location: "Hyderabad",
            type: "Hybrid",
            title: "SDE-1",
            form:"fulltime",
            description: "As a Software Development Engineer (SDE-1) at Amazon, you will join a dynamic and motivated team responsible for designing, developing, and maintaining software systems that power Amazon's vast and complex ecosystem. This entry-level position offers an opportunity to work on innovative projects and make a significant impact on our products and services.",
            key_responsibilities:"Design and Development, Coding, Testing and Debugging, Code Review, Documentation, Collaboration, Continuous Improvement",
            minimum_qualifications:"Bachelor’s degree in Computer Science, Engineering, or a related field, or equivalent practical experience. Proficiency in one or more programming languages such as Java, Python, C++, or Go. Strong understanding of computer science fundamentals, including algorithms, data structures, and software design principles. Experience with software development tools and methodologies, including version control systems (e.g., Git), integrated development environments (IDEs), and debugging tools. Excellent problem-solving skills and the ability to work independently and as part of a team.",
            technology: "HTML, CSS, JS, DART, MERN Stack",
            hourly_wage:"$58"
        },
        {
            num:3,
            company : "Paytm",
            company_overview:"Paytm is India's leading digital payments and financial services company, driven by the mission to bring financial inclusion to every individual and business. Our ecosystem encompasses a wide range of products and services, including mobile payments, e-commerce, insurance, and banking. Join us to be part of a team that is transforming the way people transact and manage their finances in India.",
            location: "Hyderabad",
            type: "Hybrid",
            title: "SDE-1",
            form:"fulltime",
            description: "As a Software Development Engineer (SDE-1) at Paytm, you will play a crucial role in designing, developing, and maintaining software applications that enhance the user experience and drive our business forward. This entry-level position offers the opportunity to work on challenging projects, collaborate with talented professionals, and grow your career in a fast-paced and innovative environment.",
            key_responsibilities:"Design and Development, Coding, Testing and Debugging, Code Review, Documentation, Collaboration, Continuous Improvement",
            minimum_qualifications:"Bachelor’s degree in Computer Science, Engineering, or a related field, or equivalent practical experience. Proficiency in one or more programming languages such as Java, Python, C++, or Go. Strong understanding of computer science fundamentals, including algorithms, data structures, and software design principles. Experience with software development tools and methodologies, including version control systems (e.g., Git), integrated development environments (IDEs), and debugging tools. Excellent problem-solving skills and the ability to work independently and as part of a team.",
            technology: "HTML, CSS, JS, DART, MERN Stack, MySQL",
            hourly_wage:"Rs. 22 lpa"
        }
    ];

  return (
    <jobContext.Provider value={{jobs, jobClicked, setJobClicked}}>
        {props.children}
    </jobContext.Provider>
  )
}

export default JobState
