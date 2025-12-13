import { useState } from "react";

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const formData = {
        Username: username,
        Email: email,
        Password: password
    };

    
       
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setErrors(validateForm());
    }

    const validateForm = () => {
        const Errors = {};
        if (!formData.Username) {
            Errors.username = "Username is required";
        }
        if (!formData.Email) {
            Errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
            Errors.email = "Email address is invalid";
        }
        if (!formData.Password) {
            Errors.password = "Password is required";
        }else if (password.length < 6) {
            Errors.password = "Password must be at least 6 characters";
        }
        return Errors;
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label>Username:
                <input
                type="text"
                value={username}
                onChange = {(e) => setUsername(e.target.value)}
                />
            </label>
            <br/>
            <p>{errors.Username}</p>
            <br/>

            <label>Email:
                <input
                type = "email"
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
                />
                </label>
                <br/>
            <p>{errors.Email}</p>
            <br/>

            <label>Password:
                <input
                type = "password"
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
                />
            </label>
            <br/>
            <p>{errors.Password}</p>
            <br/>
            <button type="submit">Submit</button>

        </form>
    )
}

export default RegistrationForm;