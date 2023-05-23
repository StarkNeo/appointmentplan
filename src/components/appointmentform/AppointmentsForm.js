import React from "react";
import ContactPicker from "../contactPicker/ContactPicker";
const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");

  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;


};

export const AppointmentForm = ({ appProps }) => {


  return (
    <>
      <form onSubmit={appProps.submit}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" placeholder="Appointment title" onChange={appProps.change} value={appProps.title}></input>
        <label htmlFor="name">Name</label>
        <ContactPicker contacts={appProps.contacts} onChange={appProps.change} value={appProps.name}/>
        <label htmlFor="date">Date</label>
        <input min={getTodayString()} id="date" type="Date" onChange={appProps.change} value={appProps.date} ></input>
        <label htmlFor="time">Time</label>
        <input id="time" type="time" onChange={appProps.change} value={appProps.time}></input>
        <input type="submit" value="Submit"></input>
      </form>

    </>
  );
};