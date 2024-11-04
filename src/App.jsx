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
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const preparingItems = (cookItem) => {
    const { preparing_time, calories, recipe_id } = cookItem
    console.log(preparing_time, calories, recipe_id)

    const remainingCookItems = cookItems.filter(cookItem => cookItem.recipe_id !== recipe_id)
    setCookItems(remainingCookItems)

    const newCurrentlyCookItems = [...currentlyCookItems, cookItem]
    setCurrentlyCookItems(newCurrentlyCookItems)

    const newTotalTime = totalTime + preparing_time;
    setTotalTime(newTotalTime)

    const newTotalCalories = totalCalories + calories;
    setTotalCalories(newTotalCalories)
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
        totalTime={totalTime}
        totalCalories={totalCalories}
      ></Recipes>

    </div>
  )
}

export default App
