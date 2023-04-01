import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form-container'>
        <form action="" method="post">
            <label>Név</label>
            <input type="text"/>

            <label>E-mail cím</label>
            <input type="email"/>

            <label>Tárgy</label>
            <input type="text"/>

            <label>Üzenet</label>
            <textarea rows="6" placeholder="Írj egy üzentet..."></textarea>
            <button type="submit" className='btn'>Küldés</button>
        </form>
    </div>
  )
}

export default Form