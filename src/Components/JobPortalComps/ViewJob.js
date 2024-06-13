import { useContext } from "react"
import React from 'react'
import jobContext from "../../Context/JobContext"
import './ViewJob.css'
import { Link } from "react-router-dom"

const ViewJob = () => {
    const context = useContext(jobContext)
    const { jobClicked } = context
    return (
        <>
        <div className="main">
            <div className="description-head">
                Job Description <br />
                <div className="description-content">
                    {jobClicked.company}
                    <div className="sub_content">
                        {jobClicked.company_overview}
                    </div>
                    Location: {jobClicked.location} <br />
                    Job Type: {jobClicked.type} <br />
                    Title: {jobClicked.title} <br />
                    Job Description: <br />
                    <div className="sub_content">
                        {jobClicked.description}
                    </div>
                    Technology: <br />
                    <div className="sub_content">
                        {jobClicked.technology}
                    </div>
                    Hourly Wage/Salary: {jobClicked.hourly_wage} <br />
                    Minimum Qualifications:
                    <div className="sub_content">
                        {jobClicked.minimum_qualifications}
                    </div>
                </div>
                <div className="apply_button">
                    <Link to={'/apply'} style={{textDecoration:"none", color:"white", fontSize:"20px"}}>Apply now</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default ViewJob
