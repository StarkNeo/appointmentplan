import React from "react";

export default function ContactPicker({contacts, onChange,value}) {
    
    return (
        <>
        <select name="name" id="name" onChange={onChange} value={value}>
          <option value=" ">No contact selected</option>
          {contacts.map((e) => {
            return (
              <>
                <option value={e.name}>{e.name}</option>
              </>
            )
          })}

        </select>

        
        </>
    );

}