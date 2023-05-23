import React from "react";
import { NavLink, Outlet } from "react-router-dom";


export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
   
};

function Root() {
    return (
        <>
        <nav>
        <NavLink to={ROUTES.CONTACTS}>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS}>
          Appointments
        </NavLink>
        
      </nav>
      <main>
        <Outlet/>
      </main>
        </>
    )
}

export default Root;