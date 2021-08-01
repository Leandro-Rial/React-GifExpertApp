import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories)

    return (
        <>
           <h2>GifExpertApp</h2>
           <AddCategory setCategories={setCategories} />
           <hr /> 
           <ol>
                {
                    categories.map(( category, i ) => (
                        <GifGrid category={category} key={i} />
                    ))
                }
           </ol>
        </>
    )
}

export default GifExpertApp
