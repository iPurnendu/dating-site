import React, { useState } from 'react';
import './Signup.css';
import { Alert, FormCheck } from 'react-bootstrap';
import { saveUsers } from '../services/ProfileService';
import {  Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    // State variables for form fields
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedAge, setSelectedAge] = useState('');
    const [gender, setGender] = useState('');
    const [preferences, setPreferences] = useState('');
    const [selectedpassword, setPassword] = useState('');
    const [selectedimg, setimg] = useState('');
    const [selectedhobbies, sethobbies] = useState('');
    const [isadded,setAdded]=useState(false);
    const [formData, setFormData] = useState({ name: "", age:"",hobbies:"",number:"", gender: "",location:"",img:"",password:""});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
   
    const [errors, setErrors] = useState({
        name: '',
        number: '',
        city: '',
        age: '',
        gender: '',
        preferences: '',
        password:'',
        img:'',
        hobbies:'',
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            name: '',
            email: '',
            city: '',
            age: '',
            gender: '',
            preferences: '',
            password:'',
            img:'',
            hobbies:'',
        };

        // Validate Name
        if (!name.trim()) {
            newErrors.name = ' * Please provide a name';
            valid = false;
        }

        // Validate Email
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!email.trim() || !emailRegex.test(email)) {
        //     newErrors.email = ' * Please enter a valid email address';
        //     valid = false;
        // }

        // Validate City
        if (!selectedCity.trim()) {
            newErrors.city = ' * Please select a city';
            valid = false;
        }

        // Validate Age
        if (!selectedAge.trim()) {
            newErrors.age = ' * Please select an age';
            valid = false;
        }

        // Validate Gender
        if (!gender.trim()) {
            newErrors.gender = ' * Please provide your gender';
            valid = false;
        }

        // Validate Preferences
        if (!preferences.trim()) {
            newErrors.preferences = ' * Please provide your preference';
            valid = false;
        }
        const passRegex = /^(?=.*\d).{4,8}$/;
        if (!selectedpassword.trim() || !passRegex.test(selectedpassword)) {
            newErrors.password = ' * Password must be between 4 and 8 digits long and include at least one numeric digit.';
            valid = false;
        }
        if (!selectedimg.trim()) {
            newErrors.img = ' * Please provide IMG url';
            valid = false;
        }
        if (!number.trim()) {
            newErrors.number = ' * Please Enter Number';
            valid = false;
        }
        if (!selectedhobbies) {
            newErrors.hobbies = ' * Please Enter Hobbies';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit =async(e) => {
        e.preventDefault();
        try{
            console.log(formData);
            const result=await saveUsers(formData);
            setAdded(true);
            setTimeout(()=>{
                setAdded(false);
            },1500);
            console.log(result.message);
            // navigate("/home");
        }catch(error){
            console.log(error);
        }
        console.log(formData);
        // if (validateForm()) {
        //     // Submit the form or perform further actions
        //     console.log('Form submitted successfully');
        // } else {
        //     console.log('Form validation failed');
        // }
    };

    return (
        <div className="registration-container">
            <div className="registration-form">
                <h2>SignUp Form</h2>
                <form className="registration_form" onSubmit={handleSubmit}>

                    <div className="form-group">
                        <input type="text" className='username' placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} name="name" onKeyUp={handleChange}/>
                        <div className="error-message">{errors.name}</div>
                    </div>

                    <div className="form-group">
                        <input type="text" className='usermail' placeholder="Enter Number" value={number} onChange={(e) => setNumber(e.target.value)} name="number" onKeyUp={handleChange}/>
                        <div className="error-message">{errors.number}</div>
                    </div>
                    <div className="form-group">
                        <input type="text" className='usermail' placeholder="Enter your Age" value={selectedAge} onChange={(e) => setSelectedAge(e.target.value)} name="age" onKeyUp={handleChange}/>
                        <div className="error-message">{errors.age}</div>
                    </div>
                    <div className="form-group">
                        <input type="text" className='usermail' placeholder="Enter City/State" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} name="location" onKeyUp={handleChange}/>
                        <div className="error-message">{errors.city}</div>
                    </div>
                    <div className="form-group">
                        <input type="password" className='usermail' placeholder="Enter Password" value={selectedpassword} onChange={(e) => setPassword(e.target.value)} name="password" onKeyUp={handleChange}/>
                        <div className="error-message">{errors.password}</div>
                    </div>
                    <div className="form-group">
                        <input type="text" className='usermail' placeholder="Enter Img URL" value={selectedimg} onChange={(e) => setimg(e.target.value)} name="img" onKeyUp={handleChange}/>
                        <div className="error-message">{errors.img}</div>
                    </div>
                    <div className="form-group">
                        <input type="text" className='usermail' placeholder="Enter your Hobbies" value={selectedhobbies} onChange={(e) => sethobbies(e.target.value)} name="hobbies" onKeyUp={handleChange}/>
                        <div className="error-message">{errors.hobbies}</div>
                    </div>

                    {/* <div className="form-group">
                         City Dropdown 
                        <div className="custom-select" id="city-select">
                            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} name="location">
                                <option value="">Select City</option>
                                <option value="pune">Pune</option>
                                <option value="kolhapur">Kolhapur</option>
                                <option value="ratnagiri">Ratnagiri</option>
                                <option value="Mumbai">Mumbai</option>
                            </select>
                        </div>
                        <div className="error-message">{errors.city}</div>
                    </div> */}
                    <FormCheck className="form-group mb-2" type="radio" label="Male" name="gender" value="male" onChange={handleChange}/>
                    <FormCheck className="form-group mb-3" type="radio" label="Female" name="gender" value="female" onChange={handleChange}/>
                    {/* <div className="form-group">
                         Age Dropdown 
                        <div className="custom-select" id="age-select">
                            <select value={selectedAge} onChange={(e) => setSelectedAge(e.target.value)} onKeyUp={handleChange}>
                                <option value="">Select Age</option>
                                {Array.from({ length: 13 }, (_, index) => 18 + index).map((age) => (
                                    <option key={age} value={age}>
                                        {age}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="error-message">{errors.age}</div>
                    </div> */}

                    {/* <div className="form-group">
                        <select className="usergender" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <div className="error-message">{errors.gender}</div>
                    </div> */}

                    <div className="form-group">
                        <select className="userpreference" value={preferences} onChange={(e) => setPreferences(e.target.value)}>
                            <option value="">Looking for..</option>
                            <option value="option1">Male</option>
                            <option value="option2">Female</option>
                            <option value="option3">Other</option>
                        </select>
                        <div className="error-message">{errors.preferences}</div>
                    </div>

                    <button type="submit">Submit</button>
                </form>
                <button type="submit">Submit</button>
                <Row>
                    <Col lg={6}>
                        {isadded ? <Alert className="profileadded">Profile Added</Alert>:null}
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Signup;