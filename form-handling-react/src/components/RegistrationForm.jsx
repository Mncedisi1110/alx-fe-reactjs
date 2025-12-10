import { useState } from "react";

function RegistrationForm() {
    const [firstname, setFirstName] = useState("")
        
       const [lastname, setLastName] = useState("")
       const [username, setUsername] = useState("")
       const [email, setEmail] = useState("")
       const [password, setPassword] = useState("")
       


    
     const handleSubmit= (e) =>{
        e,preventDefault();
     }
     return (
        <form onSubmit ={handleSubmit}>
            <label>
                Enter Your FirstName:
                <input 
                type ="text"
                value ={firstname}
                onChange ={setFirstName((e)=>{
                    e.target.value
                })}
                required
                />
            </label>
            <br/>

            <label>
                Enter Your LastName:
                <input 
                type ="text"
                value= {lastname}
                onChange = {setLastName((e)=>{
                    e.target.value
                })}
                required
                />
            </label>
            <br/>

            <label>
                Enter Your Username:
                <input 
                type ="text"
                value = {username}
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
                value = {email}
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
                value = {password}
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