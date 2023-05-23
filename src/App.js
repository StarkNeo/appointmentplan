import React from 'react';
import { AppointmentsPage } from './containers/appoinmentsPage/AppoinmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate} from "react-router-dom"
import Root, {ROUTES} from './components/root/Root';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  function addContact(info) {
    setContacts((prev)=>[info,...prev])  
  }
  
  function addAppointment(info) {
    setAppointments((prev)=>[info, ...prev]);
  }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />}/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router} />
  )
  
}

export default App;
