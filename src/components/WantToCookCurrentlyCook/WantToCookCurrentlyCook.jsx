import CurrentlyCook from "./CurrentlyCook/CurrentlyCook";
import WantToCook from "./WantToCook/WantToCook";
import PropTypes from 'prop-types'

const WantToCookCurrentlyCook = ({cookItems,preparingItems, currentlyCookItems}) => {
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
                ></CurrentlyCook>
            </div>
        </div>
    );
};

WantToCookCurrentlyCook.propTypes ={
    cookItems: PropTypes.array.isRequired,
    preparingItems: PropTypes.func
}

export default WantToCookCurrentlyCook;