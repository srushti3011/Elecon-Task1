import React, { useState } from 'react';
import './CreateUser.css';

const CreateUser = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: '',
    state: '',
    city: '',
    address: '',
    zipCode: '',
    company: '',
    role: ''
  });

  const [isEmailVerificationVisible, setIsEmailVerificationVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleFileChange = (event) => {
    // Handle file change
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEmailVerification = () => {
    // Handle email verification
    alert('Verification email sent');
  };

  const toggleEmailVerification = () => {
    setIsEmailVerificationVisible(!isEmailVerificationVisible);
  };

  return (
    <div className="create-user">
      <div className='header'>
        <h2>Create a New User</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-card">
          <div className="form-group">
            <div className="photo-upload-wrapper">
              <input type="file" name="photo" id="photo" onChange={handleFileChange} />
              <label htmlFor="photo" className="photo-upload-label"></label>
            </div>
          </div>
          <div style={{
            fontWeight:"500"
          }}>
            Email Verified
            Disabling this will automatically send the user a verification email
          </div>
          <button className="toggle-button" type="button" onClick={toggleEmailVerification}>
            {isEmailVerificationVisible ? 'Hide Email Verification' : 'Show Email Verification'}
          </button>
          {isEmailVerificationVisible && (
            <div className="email-verification-card">
              <div className="form-group email-verification">
                <input
                  type="email"
                  name="verificationEmail"
                  placeholder="Enter email for verification"
                />
                <button type="button" className="verify-email-button" onClick={handleEmailVerification}>
                </button>
              </div>
            </div>
          )}
        </form>
        <form onSubmit={handleSubmit} className="form-card">
          <div className="row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select name="country" value={formData.country} onChange={handleChange}>
                <option value="">Choose a country</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="state">State/Region</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" name="company" value={formData.company} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input type="text" name="role" value={formData.role} onChange={handleChange} />
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="create-user-button">Create User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;