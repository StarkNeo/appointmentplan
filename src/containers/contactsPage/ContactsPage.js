import React from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { useState, useEffect } from "react";

export const ContactsPage = (props) => {

    const { contacts, addContact } = props
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [nameDuplicate, setNameDuplicate] = useState(false);

    const isDuplicate = () => {
        const duplicate = contacts.find((e) => e.name === name)
        if(duplicate !== undefined){
            return true;
        }
        else{
            return false
        }
        
    }


    useEffect(()=>{
        isDuplicate();
        if(isDuplicate()){
            setNameDuplicate(true);
        }
        else{
            setNameDuplicate(false);
        }

    }, [name, contacts, nameDuplicate]);
        
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameDuplicate);
        if (!nameDuplicate) {
            let newContact = {
                name: name,
                phone: phone,
                email: email,
            }
            addContact(newContact);
            setName('');
            setEmail('');
            setPhone('');

        }
        else {
            alert("contact already exist")
        }
        
    }
    
    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    email={email}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>CONTACTS</h2>
                <TileList list={contacts} />
            </section>

        </div>
    );
}