import React from 'react'

function Step1Page() {
    return (
        <div className='personal-info'>
            <h1>Personal info</h1>
            <span>Please provide your name, email address, and Phone number.</span>
            <form className='form'>
                <div className='cont-inp'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name" id="name" className='inp' placeholder='e.g. Gabriel Bursi'/>
                </div>
                <div className='cont-inp'> 
                    <label htmlFor='email'>Email Address</label>
                    <input type="email" name="email" id="email" className='inp' placeholder='e.g. gabrielbursi@lorem.com'/>
                </div>
                <div className='cont-inp'> 
                    <label htmlFor='phone'>Phone Number</label>
                    <input type="tel" name="phone" id="phone" className='inp' placeholder='e.g. +1 234 567 890'/>
                </div>
                <button>Next Step</button>
            </form>
        </div>
    );
}

export default Step1Page;