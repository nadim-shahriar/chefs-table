const CurrentlyCookItem = ({currentlyCookItem}) => {
    console.log(currentlyCookItem)
    const { recipe_id, recipe_name, preparing_time, calories } = currentlyCookItem
    return (
        <tbody className='bg-[#28282808] py-5'>
            <tr>
                <td className="py-7 px-6 text-black">{recipe_id}</td>
                <td className="py-7 px-5">{recipe_name}</td>
                <td className="py-7 pr-5">{preparing_time} Minutes</td>
                <td className="py-7 pr-10 ">{calories} Calories</td>
                
            </tr>
        </tbody>

    );
};

export default CurrentlyCookItem;