import React from "react";
import { useState } from "react";


export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit, handleChange }) => {
  const submit=handleSubmit;
    

  function handleChange({ target }) {
        
    let id= target.id;
    switch (id) {
      case "name":
        setName(target.value)
        break;
      case "phone":
        setPhone(target.value)
        break;
      case "email":
        setEmail(target.value)
        break;
    
      default:
        break;
    }
    
   
  }

  



  return (
    <>

      <form onSubmit={submit}>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" type="text" placeholder="Name" value={name} onChange={handleChange}></input>
        <label htmlFor="phone">Phone</label>
        <input pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" name="phone" id="phone" type="tel" placeholder="Phone Number" value={phone} onChange={handleChange}></input>
        <label htmlFor="email">Email</label>
        <input name="email" id="email" type="mail" placeholder="Email" value={email} onChange={handleChange}></input>
        <button type="submit">submit</button>

      </form>
     
    </>

  );
};

