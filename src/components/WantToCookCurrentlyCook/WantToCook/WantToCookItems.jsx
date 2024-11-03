import WantToCookItem from "./WantToCookItem";
import PropTypes from 'prop-types'

const WantToCookItems = ({ cookItems, preparingItems }) => {
    return (
        <div >
            <div>
                <h1 className="text-2xl mt-6 font-semibold">Want to cook: {cookItems.length} </h1>
            </div>
            <hr className="my-6 mx-14" />
            <div className="flex items-center ">

                <table className="min-w-full text-[#878787]">
                    <thead>
                        <tr>
                            <th className="pb-5"></th>
                            <th className="pb-5">Name</th>
                            <th className="pb-5">Time</th>
                            <th className="pr-7 pb-5">Calories</th>
                        </tr>
                    </thead>

                    {
                        cookItems.map((cookItem, idx) => <WantToCookItem
                            key={idx}
                            cookItem={cookItem}
                            preparingItems={preparingItems}
                        ></WantToCookItem>)
                    }

                </table>
            </div>
        </div>
    );
};

WantToCookItems.propTypes = {
    cookItems: PropTypes.array.isRequired,
    preparingItems: PropTypes.func
}

export default WantToCookItems;