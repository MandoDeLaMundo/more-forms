import React, { useState } from  'react';
    
    
const UserForm = () =>
{
    const [fname, setFirstname] = useState("");
    const [lname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirm, setConfirm] = useState("");  

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    
    const createUser = (e) => 
    {
        e.preventDefault();
        if (fname.length > 2 && lname.length > 2 && email.length > 5 && password.length > 8 && confirm === password)
        {
            alert("Successfully created a user")
            console.log({fname, lname, email, password, confirm});
            setHasBeenSubmitted(true)
        }
        else
        {
            alert("Unsuccessful")
        }
    };

    const formMessage =() =>
    {
        if (hasBeenSubmitted)
        {
            return "Thank you for submitting the form!"
        }
        else
        {
            return "Welcome, please submit the form"
        }
    }
    
    return(
        <div>
            <p>{formMessage()}</p>
            <form onSubmit={ createUser }>

            <div>
                <label>First Name: </label> 
                <input type="text" name="fname" onChange={ (e) => setFirstname(e.target.value) } value={ fname } />
                {
                    (fname && fname.length < 2)?
                    <span style={{color:"red"}}>First name must be at least 2 characters</span>:""
                }
            </div>
                
            <div>
                <label>Last Name: </label> 
                <input type="text" name="lname" onChange={ (e) => setLastname(e.target.value) } value={ lname } />
                {
                    (lname && lname.length < 2)?
                    <span style={{color:"red"}}>Last name must be at least 2 characters</span>:""
                }
            </div>
                
            <div>
                <label>Email: </label> 
                <input type="text" name="email" onChange={ (e) => setEmail(e.target.value) } value={ email }/>
                {
                    (email && email.length < 2)?
                    <span style={{color:"red"}}>Email must be at least 5 characters</span>:""
                }
            </div>
                
            <div>
                <label>Password: </label>
                <input type="password" name="password" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
                {
                    password && password.length < 8 &&
                    <span style={{color:"red"}}>Password must be at least 8 characters</span>
                }
            </div>
                
            <div>
                <label>Confirm Password: </label>
                <input type="password" name="confirm" onChange={ (e) => setConfirm(e.target.value) } value={ confirm }/>
                {
                    confirm && confirm!== password &&
                    <span style={{color:"red"}}>Email must be at least 5 characters</span>
                }
            </div>

            </form>
        </div>
        );
};

export default UserForm;