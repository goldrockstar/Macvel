import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    dateofbirth: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    course: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await axios.post('http://localhost:5000/api/register', formData);
      setMessage(res.data.message);
      setFormData({ fullName: '', lastName: '', dateofbirth: '', age: '', gender: '', email: '', phone: '', address: '', course: '' });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="registration-container">
      <div>
        <h2>Register - Macvel Software</h2>

        {message && <p>{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="FullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="LastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <input
            type='date'
            name="dateofbirth"
            placeholder="Date of Birth"
            value={formData.dateofbirth}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <select
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="" disabled>Select Course</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Machine Learning">Machine Learning</option>
          </select>

          <button 
            type="submit"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
