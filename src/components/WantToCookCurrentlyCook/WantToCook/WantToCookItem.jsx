import PropTypes from 'prop-types'

const WantToCookItem = ({ cookItem, preparingItems }) => {
    // console.log(cookItem)
    const { recipe_id, recipe_name, preparing_time, calories } = cookItem
    return (
        <tbody className='bg-[#28282808] py-5'>
            <tr>
                <td className="py-7 pl-6 text-black">{recipe_id}</td>
                <td className="py-7 pl-7">{recipe_name}</td>
                <td className="py-7">{preparing_time} Minutes</td>
                <td className="py-7 pr-7">{calories} Calories</td>
                <td >
                    <button onClick={()=>preparingItems(cookItem)} className="bg-[#0BE58A] text-black py-2 px-6 mr-6 rounded-full font-semibold hover:bg-green-200">Preparing</button>
                </td>
            </tr>
        </tbody>

    );
};

WantToCookItem.propTypes = {
    cookItem: PropTypes.object,
    preparingItems: PropTypes.func
}

export default WantToCookItem;