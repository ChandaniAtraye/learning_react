import React, { useState } from 'react'

const MultiInputFileHandling = () => {
    const [form,setForm] = useState({
        fullName:"",
        email:"",
        password:"",
        city:"",
        gender:""
    });
    const [errors,setErrors] = useState("");
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value,
        });
    };
    const validate = () =>{
        let error  = {};

        if(!form.fullName.trim()){
            error.fullName ="Full Name is Required"
        }
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/ ;
        if(!form.email){
            error.email = "Email is required" ; 
        }else if(!emailRegex.test(form.email)){
            error.email = "Invalid Email Format"
        }
        const passwordRegex = /^(?=.*[0-9]).{6,}$/ ;
        if(!form.password){
            error.password = "password is required" ; 
        }else if(!passwordRegex.test(form.password)){
            error.password = "Invalid password Format at least 1 number 6 character"
        }
        if(!form.city){
            error.city = "please select city";
        }
        if(!form.gender){
            error.gender = "please select gender";
        }
        setErrors(error);
        return Object.keys(error).length===0;

    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(validate()){
            alert("Form submitted successfully")
            console.log(form);
        }
    }
  return (
    <div>
        <div className="container p-4 mt-5 w-50">
            <h3>Controlled Form with Validation - UseState Object</h3>
            <form onSubmit={handleSubmit} className="border rounded shadow p-4 ">
                {/* for Name */}
                <label>Full Name</label>
                <input 
                type = "text"
                className = {`form-control ${errors.fullName ? "is-invalid" : ""}`}
                name = "fullName"
                value ={form.fullName}
                onChange={handleChange}/>
                {errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                )} <br/>

                {/* for email */}
                <label>Email</label>
                <input 
                type = "text"
                className = {`form-control ${errors.email ? "is-invalid" : ""}`}
                name = "email"
                value ={form.email}
                onChange={handleChange}/>
                {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                )} <br/>

                {/* for password */}
                <label>Password</label>
                <input 
                type = "text"
                className = {`form-control ${errors.password ? "is-invalid" : ""}`}
                name = "password"
                value ={form.password}
                onChange={handleChange}/>
                {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                )} <br/> 

                {/* for city */}
                <label>Select City</label>
                <select
                    className = {`form-select ${errors.city ? "is-invalid" : ""}`}
                name = "city"
                value ={form.city}
                onChange={handleChange}>
                    <option value="">Choose City...</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="HYD">HYD</option>
                </select>
                 {errors.city && (
                    <div className="invalid-feedback">{errors.city}</div>
                )} <br/> 

                {/* for gender */}
                <label>Select Gender</label>
                <br/>
                <input
                type="radio"
                name = "gender"
                value="Male"
                checked={form.gender === "Male"}
                onChange={handleChange}/> Male <br/>
                <input
                type="radio"
                name = "gender"
                value="Female"
                checked={form.gender === "Female"}
                onChange={handleChange}/> Female
                {errors.gender && (
                    <div className="invalid-feedback">{errors.gender}</div>
                )}  <br/> <br/> 
                <button className="btn btn-primary">Submit</button>
                
                

            </form>

        </div>

    </div>
  )
}

export default MultiInputFileHandling