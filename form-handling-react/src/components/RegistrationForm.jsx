import { useState } from "react";

function RegistrationForm() {
       const [username, setUsername] = useState("")
       const [email, setEmail] = useState("")
       const [password, setPassword] = useState("")
       const [errors, setErrors] = useState({})

       function validateForm() {
        const newErrors = {};

        if (!username === "") {
            newErrors.username = "Username is required.";
        }
        if (!email.includes("@")) {
            newErrors.email = "Invalid email address.";
        }
        if (!password || password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
       }



     const handleSubmit= (e) =>{
        e,preventDefault();
     }
     return (
        <form onSubmit ={handleSubmit}>
            

            <label>
                Enter Your Username:
                <input
                type ="text"
                value={username}
                errors={validateForm.username}
                onChange = {setUsername((e)=>{
                    e.target.value
                })}

                required
                />
            </label>

            <label>
                Enter Your Email:
                <input 
                type ="email"
                value={email}
                errors={validateForm.email}
                onChange = {setEmail((e)=>{
                    e.target.value
                })}
                required
                />
            </label>
            <br/>

            <label>
                Enter Your Password:
                <input 
                type = "password"
                value={password}
                errors={validateForm.password}
                onChange = {setPassword((e)=>{
                    e.target.value
                })}
                required
                />
            </label>
            <br/>
            <button type="submit">Register</button>
        </form>
     )
    }

    export default RegistrationForm;