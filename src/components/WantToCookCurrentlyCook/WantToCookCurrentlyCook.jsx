import CurrentlyCook from "./CurrentlyCook/CurrentlyCook";
import WantToCook from "./WantToCook/WantToCook";
import PropTypes from 'prop-types'

const WantToCookCurrentlyCook = ({ cookItems, preparingItems, currentlyCookItems, totalTime, totalCalories }) => {
    return (
        <div className="shadow-xl rounded-xl border">
            <div>
                <WantToCook
                    cookItems={cookItems}
                    preparingItems={preparingItems}
                ></WantToCook>
            </div>
            <div>
                <CurrentlyCook
                    currentlyCookItems={currentlyCookItems}
                    totalTime={totalTime}
                    totalCalories={totalCalories}
                ></CurrentlyCook>
            </div>
        </div>
    );
};

WantToCookCurrentlyCook.propTypes = {
    cookItems: PropTypes.array.isRequired,
    preparingItems: PropTypes.func,
    currentlyCookItems: PropTypes.array,
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number
}

export default WantToCookCurrentlyCook;