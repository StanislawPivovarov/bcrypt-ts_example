import { Button, Input } from "@mui/material";
import React, { useRef } from "react";
import { FormFilling, FormWind } from "../../style/styles";
import bcrypt from "bcryptjs";


function LoginField(){

    const emailInputRef = useRef<any>();
    const passwordInputRef = useRef<any>();

    const SignUpForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        console.log(password)
        
        const hashedPassword = bcrypt.hashSync(password, 10);
        console.log(hashedPassword);
        alert(hashedPassword)

        //registration function post api here
        window.localStorage.setItem('login', JSON.stringify({email, hashedPassword}))
    }

    const LoginForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        //@ts-ignore
        const getHashedPass = JSON.parse(window.localStorage.getItem('login')).hashedPassword
        console.log(getHashedPass);
        bcrypt.compare(password, getHashedPass, function(err, isMatch){
            if(err){
                throw err;
            } else if(!isMatch){
                alert("Пароли не совпадают")
            } else {
                alert("Пароли совпадают! Добро пожаловать!")
            }
        });

    }
    
    return(
        <FormWind>
            <FormFilling>
                <h1>feature: hash password for exam</h1>
                <p>How it works <br />
                Fill all fields with random data <br />
                go to console in your browser, you'll see your hash for password
                Hashing with BCrypt</p>
                <input style={{marginTop: 40, height: 40}} type="text" placeholder="Your login" ref={emailInputRef}></input>
                <input style={{marginTop: 20, height: 40}} type="password" placeholder="Your password" ref={passwordInputRef}></input>
                <Button style={{marginTop: '20px', width: '50%', margin: "0 auto"}} onClick={(e) =>LoginForm(e)}>Login</Button>
                <Button style={{marginTop: '20px', width: '50%', margin: "0 auto"}} onClick={(e) =>SignUpForm(e)}>Sign Up</Button>
            </FormFilling>
        </FormWind>
    )
} 

export default LoginField;