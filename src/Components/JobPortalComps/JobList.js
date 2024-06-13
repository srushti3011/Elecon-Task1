import React, { useContext } from 'react';
import jobContext from '../../Context/JobContext';
import './JobList.css'
import { Link } from 'react-router-dom';

const JobList = () => {
  const context = useContext(jobContext);
  const { jobs, setJobClicked } = context;
  const updateClick = (job) => {
    setJobClicked(job)
    console.log(job)
  }
  return (
    <>
    <h1 style={{
      marginLeft:"20px"
    }}>
      Job List
    </h1>
      {
        jobs.map((job) => {
          return (
            <div key={job.num} className='jobitem'>
              <div className='job'>
                <strong>Company name :</strong> {job.company} <br />
                <strong>Job Title: </strong>{job.title} <br />
                <strong>Location: </strong>{job.location} <br />
                <strong>Hourly wage/Salary:</strong> {job.hourly_wage} <br />
                  <Link className='viewjob-button' to={'/showjob'}>
                <button className='viewjob' onClick={() => { updateClick(job) }}>
                    View job
                </button>
                  </Link>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default JobList
