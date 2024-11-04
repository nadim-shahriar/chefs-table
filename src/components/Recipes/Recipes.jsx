import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import WantToCookCurrentlyCook from "../WantToCookCurrentlyCook/WantToCookCurrentlyCook";
import PropTypes from 'prop-types'

const Recipes = ({handleWantToCook, cookItems, preparingItems, currentlyCookItems, totalTime, totalCalories}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch(`recipes.json`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className="mb-12 text-center">
            <div>
                <h1 className="font-bold text-[40px] mb-6">Our Recipes</h1>
                <p className="text-[#150B2B99]">Explore our curated recipes that turn simple ingredients into memorable meals. With easy-to-follow steps, there is something for every <br /> craving—from comforting classics to fresh, new flavors. Perfect for any skill level and any occasion.</p>
            </div>

            <div className="my-12 flex gap-6">
                <div className="grid w-2/3 grid-cols-2 gap-6">
                    {
                        recipes.map((recipe, idx) => <Recipe
                            key={idx}
                            recipe={recipe}
                            handleWantToCook={handleWantToCook}
                        ></Recipe>)
                    }
                </div>
                <div className="w-1/3">
                    <WantToCookCurrentlyCook
                        cookItems={cookItems}
                        preparingItems={preparingItems}
                        currentlyCookItems={currentlyCookItems}
                        totalTime={totalTime}
                        totalCalories={totalCalories}
                    ></WantToCookCurrentlyCook>
                </div>
            </div>
        </div>
    );
};

Recipes.propTypes={
    handleWantToCook: PropTypes.func.isRequired,
    cookItems: PropTypes.array.isRequired,
    preparingItems: PropTypes.func,
    currentlyCookItems: PropTypes.array,
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number
}

export default Recipes;