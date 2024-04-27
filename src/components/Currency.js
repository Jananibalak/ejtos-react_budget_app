import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency,dispatch} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrency = (event) => {
        setNewCurrency(event.target.value);
       // alert(newBudget);
        //alert(totalExpenses);
      /* if(newBudget<totalExpenses)
       {
           alert("You cannot reduce budget value lower than spending");
           setNewBudget("");
                   return;
       }*/
       dispatch({
        type: 'CHG_CURRENCY',
        payload: newCurrency
    });
        
    }
   
    

    
   
    return (
<div className='alert alert-success'>
<select onChange={handleCurrency} id="currency" name="currency" className='form-select' style={{backgroundColor:'#20c997'}}>
<option value="">Currency ($ Dollar)</option>
<option value="$">$ Dollar</option>
<option value="£">£ Pound</option>
<option value="€">€ Euro</option>
<option value="₹">₹ Ruppee</option>
</select>

</div>
    );
};
export default Currency;