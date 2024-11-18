import { useState } from "react"

const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event)=>{
        setInputValue(event.target.value )
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        setCategories(categories => [inputValue,...categories]);
        setInputValue('');
    }    
    return (
        <form onSubmit={(event)=>onSubmit(event)}>
            <input 
            type="text" 
            placeholder="Search for a gif"
            value={inputValue}
            onChange={ (event)=>onInputChange(event)}
            />
            </form>
    )
        
        
}

export default AddCategory