import { useEffect, useState } from "react"
import AddCategory from "./components/addCategory";

export const GifApp = () => {

    const [categories  , setCategories] = useState([ 'Naruto','Seiya','One Piece' ]);
    // const onAddCategory = ()=>{
    //     setCategories(['saSas',...categories]);
    //     console.log(categories);
    // }
  
  return (
    <>
    <h1>Gif App</h1>

    <AddCategory setCategories = { setCategories }/>

    {/* INPUT*/ }

    {/* INPUT*/ }

    {/* INPUT*/ }
    <ol>
        { categories.map(
            (category)=>{
                return <li key = {category}> {category} </li>        
        }) }
    </ol>

    </>
    
  )
}
