import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdmissionForm.css';

export default function AdmissionForm() {
  const [formData ,setFormData] = useState({
    name:"",
    scholarNo:"",
    email:"",
    dateOfBirth:"",
    gender:"",
    AdharNo:"",
    FeeRecipte:"",
    FatheName:"",
    MotherName:"",
    Address:"",
    HostelNo:""
});
  const Navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // to a server 
    // we can connec to mongodb
    console.log(formData)
    // Redirect to the end page
    Navigation('/end');
  };

  return (
    
    <div className="admission-form">
      <h1>Admission Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="scholarNo"
          name="scholarNo"
          placeholder="Enter Scholar Number"
          value={formData.scholarNo}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="dateOfBirth"
          name="dateOfBirth"
          placeholder="Enter Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="gender"
          name="gender"
          placeholder="Enter Gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="AdharNo"
          name="AdharNo"
          placeholder="Enter Adhar Number"
          value={formData.AdharNo}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="FeeRecipte"
          name="FeeRecipte"
          placeholder="Enter Fee Receipt Number"
          value={formData.FeeRecipte}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="FatheName"
          name="FatheName"
          placeholder="Enter Father's Name"
          value={formData.FatheName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="MotherName"
          name="MotherName"
          placeholder="Enter Mother's Name"
          value={formData.MotherName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="Address"
          name="Address"
          placeholder="Enter Address"
          value={formData.Address}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="HostelNo"
          name="HostelNo"
          placeholder="Enter Hostel Number"
          value={formData.HostelNo}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

