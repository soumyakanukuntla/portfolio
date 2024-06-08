import React from 'react'

function RecipeWebsite() {

    const APP_ID = "22dfed15";
    const APP_KEY = " ac8fc1b26a2d2823802b7197c9ac2cb3";
     	

    const exampleReq =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  return (
    <div className='App'>
    <form className='search-form'>
 <input type="text" className='search-bar' />
 <button type='submit' className='search-button'>Search</button>

    </form>
    </div>
  )
}

export default RecipeWebsite;
