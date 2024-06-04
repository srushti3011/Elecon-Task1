import React from 'react'
import '../App.css'
const EditProfile = () => {
  return (
    <>
    <div className='outer'>
        <div className='topellipse'>
          <h1 className='main-head'>
            &gt;Edit Profile
          </h1>
        </div>
        <div className='profile'>
          <div className='profileitem' style={{
            borderRadius: "50%",
            height: '110px',
            width: '110px',
            marginTop: '2px'
          }} id='photo'>
          </div>
          <div className='profileitem' style={{
            marginTop: '-50px'
          }}>
            <h1 style={{
              position: 'relative',
              marginLeft: '20px'
            }}>Srushti Engineer</h1>
          </div>
        </div>
        <br />
        <form>
          <div className='edit_form'>

            <fieldset>
              <legend>
                Full name<br />
              </legend>
              <input type='text' placeholder='Srushti Sarju Engineer'>
              </input>
            </fieldset>

            <fieldset className='input_line'>
              <legend>
                Phone number<br />
              </legend>
              <input type='text' placeholder='73592 41244'>
              </input>
            </fieldset>

            <fieldset className='input_line' style={{
              marginLeft:'40px'
            }}>
              <legend>
                State/Region
              </legend>
              <input type='text'  placeholder='Gujarat'>
              </input>
            </fieldset>

            <fieldset>
              <legend>
                Address
              </legend>
              <textarea rows='5' cols='150' placeholder='XYZ'>
              </textarea>
            </fieldset>

            <fieldset>
              <legend>
                Company
              </legend>
              <input type='text' placeholder='Tech. Elecon'>
              </input>
            </fieldset>

            <fieldset>
              <legend>
                Email
              </legend>
              <input type='email' placeholder='srushtie123@gmail.com'>
              </input>
            </fieldset>

            <fieldset className='input_line'>
              <legend>
                City
              </legend>
              <input type='text' placeholder='Anand'>
              </input>
            </fieldset>

            <fieldset className='input_line' style={{
              marginLeft:'40px'
            }}>
              <legend>
                Country
              </legend>
              <input type='text' placeholder='India'>
              </input>
            </fieldset>
            <br />

            <fieldset className='input_line'>
              <legend>
                Zip/Code
              </legend>
              <input type='text' placeholder='388120'>
              </input>
            </fieldset>

            <fieldset className='input_line'style={{
              marginLeft:'40px'
            }}>
              <legend>
                Role
              </legend>
              <input type='text' placeholder='Frontend Developer Intern'>
              </input>
            </fieldset>

          </div>
          <button type='submit' className='submit_button'>
            Save changes
          </button>
        </form>
      </div>
      </>
  )
}

export default EditProfile
