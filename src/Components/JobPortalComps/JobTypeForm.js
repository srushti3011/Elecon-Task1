import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './JobTypeForm.css';

const JobTypeForm = () => {
    const [formData, setFormData] = useState({
        location: '',
        jobType: '',
        skill: '',
        workType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <>
            <h1 className='jobform-title'>
                Fill the choice form...
            </h1>
            <form className="jobtypeform" onSubmit={handleSubmit}>
                <div>
                    <label className="jobform-label" htmlFor="location">Location:</label>
                    <select className="jobform-select" name="location" value={formData.location} onChange={handleChange}>
                        <option value="">Select Location</option>
                        <option value="Anand">Anand</option>
                        <option value="Ahemedabad">Ahemedabad</option>
                        <option value="Surat">Surat</option>
                        <option value="Vadodara">Vadodara</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Pune">Pune</option>
                    </select>
                </div>

                <div>
                    <label className="jobform-label" htmlFor="jobType">Type of Job:</label>
                    <select className="jobform-select" name="jobType" value={formData.jobType} onChange={handleChange}>
                        <option value="">Select Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Contract Based">Contract Based</option>
                        <option value="Internship">Internship</option>
                        <option value="Part Time">Part Time</option>
                    </select>
                </div>

                <div>
                    <label className="jobform-label" htmlFor="skill">Skill:</label>
                    <select className="jobform-select" name="skill" value={formData.skill} onChange={handleChange}>
                        <option value="">Select Skill</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Graphics Designer">Graphics Designer</option>
                        <option value="Data Analysis">Data Analysis</option>
                    </select>
                </div>

                <div>
                    <label className="jobform-label" htmlFor="workType">Work Type:</label>
                    <select className="jobform-select" name="workType" value={formData.workType} onChange={handleChange}>
                        <option value="">Select Work Type</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Remote">Remote</option>
                        <option value="On-site">On-site</option>
                    </select>
                </div>
                {/* <Link to={'/joblist'} className='jobform-submit' onClick={handleSubmit}>
                    Submit
                </Link> */}
                <Link to={'/joblist'} className='jobform-submit'>
                Search
                </Link>
            </form>
        </>
    )
}

export default JobTypeForm
