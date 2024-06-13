import React, {useState} from 'react'
import { FaStethoscope, FaChalkboardTeacher, FaDollarSign, FaLaptop, FaHardHat, FaConciergeBell } from 'react-icons/fa';
import './Categories.css'
import { Link } from 'react-router-dom';

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const categories = [
        { name: 'Healthcare', icon: <FaStethoscope /> },
        { name: 'Education', icon: <FaChalkboardTeacher /> },
        { name: 'Finance', icon: <FaDollarSign /> },
        { name: 'Technology', icon: <FaLaptop /> },
        { name: 'Construction', icon: <FaHardHat /> },
        { name: 'Hospitality', icon: <FaConciergeBell /> },
    ];
    return (
        <>
            <div className="category-container">
                <h2>Select Your Job Category</h2>
                <div className="category-grid">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className={`category-item ${category.name === selectedCategory ? 'selected' : ''}`}
                            onClick={() => handleCategorySelect(category.name)}
                        >
                            <div className="icon">{category.icon}</div>
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
                <Link to={'/jobtypeform'} className='search-jobs-button'>Search Jobs &rarr;</Link>
            </div>
        </>
    )
}

export default Categories
