import React, { useState } from 'react';
import './style.css'; // Make sure to include your CSS file
import logo from './logo.png';

const LoginPage = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Name" />
                    <input type="number" placeholder="Roll No" />
                    <input type="password" placeholder="Password" />
                    <input type="email" placeholder="Email" />
                    <input type="number" placeholder="Phone No" />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Your ID" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forget Your Password?</a>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                    <img src={logo} alt="Logo" width="120px" height="120px" />
                        <h3>Start your RISE journey today..</h3>
                        <p>RISE: Unlock Opportunities, Streamline Events, Elevate Achievements.</p>
                        <button className="hidden" onClick={handleToggle}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                    <img src={logo} alt="Logo" width="120px" height="120px" />
                        <h1>Welcome to RISE</h1>
                        <p>If you are a student and haven't registered, sign up now</p>
                        <button className="hidden" onClick={handleToggle}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
