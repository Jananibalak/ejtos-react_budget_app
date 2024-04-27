import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget ,currency,dispatch} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
       // alert(newBudget);
        //alert(totalExpenses);
      /* if(newBudget<totalExpenses)
       {
           alert("You cannot reduce budget value lower than spending");
           setNewBudget("");
                   return;
       }*/
       dispatch({
        type: 'SET_BUDGET',
        payload: newBudget
    });
        
    }
   
    

    
   
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;