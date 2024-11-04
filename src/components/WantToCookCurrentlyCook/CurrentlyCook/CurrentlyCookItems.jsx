import CurrentlyCookItem from "./CurrentlyCookItem";
import PropTypes from 'prop-types'

const CurrentlyCookItems = ({ currentlyCookItems, totalTime, totalCalories }) => {
    return (
        <div>
            <div>
                <h1 className="text-2xl mt-8 font-semibold">Currently cooking: {currentlyCookItems.length}</h1>
            </div>
            <hr className="my-6 mx-14" />
            <div className="flex items-center pb-10">
                <table className="min-w-full text-[#878787]">
                    <thead>
                        <tr>
                            <th className="pb-5"></th>
                            <th className="pb-5 pr-2">Name</th>
                            <th className="pb-5 pr-5">Time</th>
                            <th className="pb-5 pr-10">Calories</th>
                        </tr>
                    </thead>

                    {
                        currentlyCookItems.map((currentlyCookItem, idx) => <CurrentlyCookItem
                            key={idx}
                            currentlyCookItem={currentlyCookItem}
                        ></CurrentlyCookItem>)
                    }
                    <tbody>
                        <tr className="text-[#282828CC] font-medium">
                            <td></td>
                            <td></td>
                            <td className="py-2 border-r-2 border-black">Total Time = {totalTime} Minutes</td>
                            <td className="py-2 pr-5">Total Calories = {totalCalories} Calories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

CurrentlyCookItems.propTypes = {
    currentlyCookItems: PropTypes.array,
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number
}

export default CurrentlyCookItems;