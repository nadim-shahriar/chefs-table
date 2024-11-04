import CurrentlyCookItems from "./CurrentlyCookItems";
import PropTypes from 'prop-types'

const CurrentlyCook = ({ currentlyCookItems, totalTime, totalCalories }) => {
    return (
        <div>
            <CurrentlyCookItems
                currentlyCookItems={currentlyCookItems}
                totalTime={totalTime}
                totalCalories={totalCalories}
            ></CurrentlyCookItems>
        </div>
    );
};

CurrentlyCook.propTypes ={
    currentlyCookItems: PropTypes.array,
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number
}

export default CurrentlyCook;