 import { useState } from "react";
 import './LoginForm.css';

    export function LoginForm() {
            const [showPassword,setShowPassword] = useState(false);
            
             function togglePassWord(){
                setShowPassword(!showPassword);
            }
            
            return (
                <div>
                    <p className="js-header">Hello,welcome to my website inside.</p>
                    <div>
                        <input type="text" placeholder="Email" className="js-input"/>
                    </div>
                    <div>
                         <input onClick={togglePassWord} type={showPassword ? 'text' : 'password'} placeholder="Password" className="js-input">
                        </input>
                         <button onClick={togglePassWord} className="js-show">{showPassword ? "Hide" : "Show"}</button>
                    </div>
                   
                    <button className="js-button">Login</button>
                    <button className="js-button">Signup</button>
                  
                </div>
            );
        }