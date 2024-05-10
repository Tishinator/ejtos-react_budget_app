
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        let newValue = event.target.value;
        if (Number(newValue) < totalExpenses){
            alert("The budget cannot be reduced lower than the current spending.")
            setNewBudget(totalExpenses)
        }
        else if (Number(newValue) > 20000){
            alert("The budget cannot exceed 20,000.")
            setNewBudget(20000)
        }else{
            setNewBudget(event.target.value);
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" 
                   step="10"
                   value={newBudget}
                   onChange={handleBudgetChange}>    
            </input>
        </div>
    );
};
export default Budget;
