import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>
                <p>Don't have an account? <Link to={'/signup'}>Create your account</Link></p>
                <form>
                    <input type="email" placeholder="Email" className="input-field" />
                    <input type="password" placeholder="Password" className="input-field" />
                    <div className="forgot-password">
                        <Link>Forgot Password?</Link>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;