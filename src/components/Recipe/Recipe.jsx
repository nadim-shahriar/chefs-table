import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types'

const Recipe = ({ recipe, handleWantToCook }) => {
    const { recipe_name, recipe_image, short_description, preparing_time, calories, ingredients } = recipe;
    return (
        <div>
            <div className="text-start shadow-xl p-6 rounded-xl border">
                <img className="h-[250px] w-full rounded-xl " src={recipe_image} alt="" />
                <h3 className="text-xl font-semibold mt-6 mb-4">{recipe_name}</h3>
                <p className="text-[#150B2B99] mb-10">{short_description}</p>
                <h4 className="text-lg mb-4">Ingredients: {ingredients.length}</h4>
                <ul className="text-[#878787] list-disc list-inside mb-10">
                    {
                        ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))
                    }
                </ul>
                <div className="flex gap-4 text-[#282828CC] mb-6">
                    <div className="flex items-center gap-2">
                        <IoTimeOutline />
                        <p>{preparing_time} minutes</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <AiOutlineFire />
                        <p>{calories} calories</p>
                    </div>
                </div>
                <button onClick={()=>handleWantToCook(recipe)} className="bg-[#0BE58A] text-black py-3 px-6 rounded-full font-semibold hover:bg-green-200">Want to Cook</button>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func.isRequired
}

export default Recipe;