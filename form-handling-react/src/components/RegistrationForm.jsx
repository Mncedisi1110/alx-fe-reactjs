import { useState } from "react";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname:"",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData(values => ({...values, [name]:value}))
    }
     const handleSubmit= (e) =>{
        e,preventDefault();
     }
     return (
        <form onSubmit ={handleSubmit}>
            <label>
                Enter Your FirstName:
                <input 
                type ="text"
                name = "firstname"
                value ={formData.firstname}
                onChange ={handleChange}
                required
                />
            </label>
            <br/>

            <label>
                Enter Your LastName:
                <input 
                type ="text"
                name = "lastname"
                value= {formData.lastname}
                onChange = {handleChange}
                required
                />
            </label>
            <br/>

            <label>
                Enter Your Email:
                <input 
                type ="email"
                name = "email"
                value = {formData.email}
                onChange = {handleChange}
                required
                />
            </label>
            <br/>

            <label>
                Enter Your Password:
                <input 
                type = "password"
                name = "password"
                value = {formData.password}
                onChange = {handleChange}
                required
                />
            </label>
            <br/>
            <button type="submit">Register</button>
        </form>
     )
    }

    export default RegistrationForm;