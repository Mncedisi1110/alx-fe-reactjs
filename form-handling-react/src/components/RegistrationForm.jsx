import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        Username: "",
        Email: "",
        Password:""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setErrors(validateForm());
    }

    const validateForm = () => {
        const Errors = {};
        if (!formData.Username) {
            Errors.Username = "Username is required";
        }
        if (!formData.Email) {
            Errors.Email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
            Errors.Email = "Email address is invalid";
        }
        if (!formData.Password) {
            Errors.Password = "Password is required";
        }
        return Errors;
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label>Username:
                <input
                type="text"
                name="Username"
                value ={formData.Username}
                onChange = {handleChange}
                />
            </label>
            <br/>
            <p>{errors.Username}</p>
            <br/>

            <label>Email:
                <input
                type = "email"
                name = "Email"
                value = {formData.Email}
                onChange = {handleChange}
                />
                </label>
                <br/>
            <p>{errors.Email}</p>
            <br/>

            <label>Password:
                <input
                type = "password"
                name = "Password"
                value = {formData.Password}
                onChange = {handleChange}
                />
            </label>
            <br></br>
            <p>{errors.Password}</p>
            <br/>
            <button type="submit">Submit</button>

        </form>
    )
}

export default Form;