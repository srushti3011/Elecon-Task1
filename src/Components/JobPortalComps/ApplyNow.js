import React from 'react'
import './ApplyNow.css'

const ApplyNow = () => {
    return (
        <>
            <div className='apply-outer'>
                <div className='apply-form'>
                    Full Name: &nbsp;
                    <input type='text' className='apply-input'></input><br />
                    Why do you want to join our company? &nbsp;
                    <input type='text' className='apply-input'></input><br />
                    Describe projects done by you in brief: &nbsp;
                    <input type='text' className='apply-input'></input><br />
                    Give your likedin id link: &nbsp;
                    <input type='url' className='apply-input'></input><br />
                    Upload your resume: &nbsp;
                    <input type='file' className='apply-input'></input> <br/>
                    <button className='ok-button' onClick={()=>{
                        alert("Successfully applied!")
                    }}>
                        Apply Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default ApplyNow
