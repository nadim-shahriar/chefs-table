import WantToCookItems from "./WantToCookItems";
import PropTypes from 'prop-types'

const WantToCook = ({ cookItems, preparingItems }) => {
    return (
        <div>
            <WantToCookItems
                cookItems={cookItems}
                preparingItems={preparingItems}
            ></WantToCookItems>
        </div>
    );
};

WantToCook.propTypes = {
    cookItems: PropTypes.array.isRequired,
    preparingItems: PropTypes.func
}

export default WantToCook;