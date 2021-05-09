import React, {useEffect} from 'react';
import {MdDeleteForever} from 'react-icons/md'

const Contacts = ({contacts, deleteContact}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    // useEffect(()=>{}, [contacts])
    return (
        <section className='contacts'>
            <h2 className="title title__contacts">Contacts</h2>
            <form onSubmit={handleSubmit}>
                <input className='input__add' type="text" placeholder='Search...' />
            </form>
            <div className="contacts__inner">
                {contacts.map((item, index)=>{
                    return (<div key={index} className="contacts__item">
                                <div className="contacts__item-name">{item.name}</div>
                                <div className="contacts__item-box">
                                    <div className="contacts__item-tel">{item.number}</div>
                                    <MdDeleteForever className='contacts__item-icon' onClick={()=>deleteContact(index)} />
                                </div>
                            </div>)
                })}
            </div>
        </section>
    );
}

export default Contacts;
