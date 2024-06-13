import React from 'react'
import './TopHirers.css'

const TopHirers = () => {
    const companies = [
        {
            name: 'Google',
            description: 'Renowned for its innovative products and services.',
            url: 'https://www.google.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
        },
        {
            name: 'Microsoft',
            description: 'Provides a robust platform for web developers.',
            url: 'https://www.microsoft.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
        },
        {
            name: 'Amazon',
            description: 'Focuses on large-scale and high-impact projects.',
            url: 'https://www.amazon.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
        },
        {
            name: 'X-Team',
            description: 'Offers flexible contracts and scalable solutions.',
            url: 'https://x-team.com',
            logo: 'https://tse1.mm.bing.net/th?id=OIP.knbfhxJLbGzmQCYi-USrwwAAAA&pid=Api&rs=1&c=1&qlt=95&w=271&h=107'
        },
        {
            name: 'Arc',
            description: 'Connects businesses with top-tier remote developers.',
            url: 'https://arc.dev',
            logo: 'https://www.arclimited.com/images/logoo/logo.jpg'
        }
    ];

    return (
        <div className="company-list">
            <h1 className='hirers-head'>Top Hiring Companies</h1>
            {/* <ul className='hirers-ul'> */}
                {companies.map((company, index) => (
                    <div key={index} className="company-item">
                        <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
                        <div className="company-details">
                            <h2>{company.name}</h2>
                            <p className='topcomp'>{company.description}</p>
                            {/* <a href={company.url} target="_blank" rel="noopener noreferrer">Visit Website</a> */}
                        </div>
                    </div>
                ))}
            {/* </ul> */}
        </div>
    );
}

export default TopHirers
