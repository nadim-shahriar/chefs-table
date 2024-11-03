import { useState } from 'react'
import './App.css'
import Banner from './components/Header/Banner'
import Navbar from './components/Header/Navbar'
import Recipes from './components/Recipes/Recipes'

function App() {
  const [cookItems, setCookItems] = useState([])
  const handleWantToCook = (recipe) => {
    const newCookItems = [...cookItems, recipe]
    setCookItems(newCookItems)
  }

  const [currentlyCookItems, setCurrentlyCookItems] = useState([])
  const preparingItems = (cookItem) => {
    const { preparing_time, calories, recipe_id } = cookItem
    console.log(preparing_time, calories, recipe_id)

    const remainingCookItems = cookItems.filter(cookItem => cookItem.recipe_id !== recipe_id)
    setCookItems(remainingCookItems)

    const newCurrentlyCookItems = [...currentlyCookItems, cookItem]
    setCurrentlyCookItems(newCurrentlyCookItems)
  }


  return (
    <div className='lexend container mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes
        handleWantToCook={handleWantToCook}
        cookItems={cookItems}
        preparingItems={preparingItems}
        currentlyCookItems={currentlyCookItems}
      ></Recipes>

    </div>
  )
}

export default App
