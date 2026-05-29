import { React, useRef, useState } from 'react'

const UseRefFormHandling = () => {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const cityRef = useRef();
    const maleRef = useRef();
    const femaleRef = useRef();

    const [errors, setErrors] = useState({});
    const validate = (data) => {
        let error = {};

        if (!data.fullName.trim()) {
            error.fullName = "Full Name is Required"
        }
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!data.email) {
            error.email = "Email is required";
        } else if (!emailRegex.test(data.email)) {
            error.email = "Invalid Email format"
        }
        const passwordRegex = /^(?=.*[0-9]).{6,}$/;
        if (!data.password) {
            error.password = "password is required";
        } else if (!passwordRegex.test(data.password)) {
            error.password = "Invalid password dataat at least 1 number 6 character"
        }
        if (!data.city) {
            error.city = "please select city";
        }
        if (!data.gender) {
            error.gender = "please select gender";
        }
        setErrors(error);
        return Object.keys(error).length === 0;

    }
    const handleSubmit = (e) => {
        e.preventDefault(); // denied page reload

        const formData = {
            fullName: fullNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            city: cityRef.current.value,
            gender: maleRef.current.checked
                ? 'Male'
                : femaleRef.current.checked
                    ? 'Female'
                    : ""


        };
        if (validate(formData)) {
        console.log(formData);
        alert("Form Submitted Successfully");
    }
    };
    
    return (
        <div>
            <div className="container w-50 p-4 mt-4">
                <h2 className='text-center mb-3'>Uncontrolled From Example - UseRef</h2>
                <form onSubmit={handleSubmit} className='border p-4 rounded shadow'>
                    <div className="m-2">
                        <label className='form-label'>Full Name</label>
                        <input
                            type='text'
                            ref={fullNameRef}
                            className={`form-control ${errors.fullName ? "is-invalid" : " "}`} />
                            {errors.fullName && (
                            <div className="invalid-feedback">{errors.fullName}</div>
                        )}
                    </div>


                    <div className="m-2">
                        <label className='form-label'>Email</label>
                        <input
                            type='email'
                            ref={emailRef}
                            className={`form-control ${errors.email ? "is-invalid" : " "}`} />
                            {errors.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                        )}
                    </div>

                    <div className="m-2">
                        <label className='form-label'>password</label>
                        <input
                            type='password'
                            ref={passwordRef}
                            className={`form-control ${errors.password ? "is-invalid" : " "}`} />
                            {errors.password && (
                            <div className="invalid-feedback">{errors.password}</div>
                        )}
                    </div>


                    <div className="mb-3">
                        <label className='form-label'>Select City</label>
                        <select
                            ref={cityRef}
                            className={`form-control ${errors.city ? "is-invalid" : ""}`}>
                            <option value="">Choose City...</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Nashik">Nashik</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="HYD">HYD</option>
                        </select>
                        {errors.city && (
                            <div className="invalid-feedback">{errors.city}</div>
                        )} 
                    </div>

                    <div className="mb-3">
                        <label className='form-label d-block'>Gender</label>

                        <input
                            type='radio'
                            name='gender'
                            value='Male'
                            ref={maleRef} /> Male <br />
                        <input
                            type='radio'
                            name='gender'
                            value='Female'
                            ref={femaleRef} /> Female <br />
                        {errors.gender && (
                            <div className="text-danger">{errors.gender}</div>
                        )}
                    </div>
                    <button className='btn btn-primary'> Submit </button>
                </form>
            </div>

        </div>
    )
}

export default UseRefFormHandling