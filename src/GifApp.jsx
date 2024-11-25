import { useEffect, useState } from "react"
import {AddCategory,GifGrid} from "./components/";

export const GifApp = () => {

    const [categories  , setCategories] = useState([ 'Naruto' ]);
    const onAddCategory = ( newCategory )=>{

      if(categories.includes(newCategory)) return;
      setCategories([newCategory,...categories]);
        //console.log(categories);
    }
  
  return (
    <>
      <h1>Gif App</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}
