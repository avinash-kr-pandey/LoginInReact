import React from 'react';
import './Login.css'




const inputs = document.querySelectorAll(".input");


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});



const Login = () => {
    return (
        <div>
            <img className="wave" src="img/wave.png" alt="Wave" />
            <div className="container">
                <div className="img">
                    <img src="img/bg.svg" alt="Background" />
                </div>
                <div className="login-content">
                    <form action="index.html">
                        <img src="https://hopingminds.com/wp-content/uploads/2023/01/Asset-5.png" alt="Hoping Minds"/>
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Username</h5>
                                <input type="text" className="input" />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input type="password" className="input" />
                            </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <div className='Login-button'>
                            <button type="submit" className="btn" value="Login" >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
