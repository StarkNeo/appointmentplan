import React, { useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { AppointmentForm } from "../../components/appointmentform/AppointmentsForm";

export const AppointmentsPage=(props)=>{
    
  const { appointments, addAppointment, contacts } = props
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  

    const handleChange=({target})=>{
      let reference = target.id;
      switch (reference) {
        case "title":
          setTitle(target.value)          
          break;
        case "name":
          setName(target.value)
          break
        case "date":
          setDate(target.value);
          break;
        case "time":
          setTime(target.value);
          break;
        default:
          break;
      }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let newAppoinment = {
          title: title,
          name: name,
          date: date,
          time: time,
      };
      alert("desde appointments.js")
      addAppointment(newAppoinment);
      setDate('');
      setTitle('');
      setName('');
      setTime('');

    }

    const appElementos ={
      title: title,
      name: name,
      date: date,
      time: time,
      submit: handleSubmit,
      change: handleChange,
      contacts: contacts,
    }

    return (
        <div>
        <section>
          <h2>Add Appointment</h2>
          <AppointmentForm appProps={appElementos} />
        </section>
        <hr />
        <section>
          <h2>Appointments</h2>
          <TileList list={appointments} />
        </section>
      </div>
    )
}