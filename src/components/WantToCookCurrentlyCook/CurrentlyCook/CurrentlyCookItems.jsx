import CurrentlyCookItem from "./CurrentlyCookItem";

const CurrentlyCookItems = ({currentlyCookItems}) => {
    return (
        <div>
            <div>
                <h1 className="text-2xl mt-8 font-semibold">Currently cooking: </h1>
            </div>
            <hr className="my-6 mx-14" />
            <div className="flex items-center pb-10">
                <table className="min-w-full text-[#878787]">
                    <thead>
                        <tr>
                            <th className="pb-5"></th>
                            <th className="pb-5">Name</th>
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

                </table>
            </div>
        </div>
    );
};

export default CurrentlyCookItems;