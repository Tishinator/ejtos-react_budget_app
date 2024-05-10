import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    // const [currency, setCurrency] = useState("");
    const {dispatch}= useContext(AppContext);

    const setCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <label for="currencySelect"> Currency : </label>
            <select className="custom-select" id="currencySelect" onChange={(event) => setCurrency(event.target.value)}>
                    <option defaultValue value="£" name="pound">£ Pound</option>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
}

export default Currency