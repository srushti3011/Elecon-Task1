import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>
                <p>Don't have an account? <a href="#">Create your account</a></p>
                <form>
                    <input type="email" placeholder="Email" className="input-field" />
                    <input type="password" placeholder="Password" className="input-field" />
                    <div className="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;