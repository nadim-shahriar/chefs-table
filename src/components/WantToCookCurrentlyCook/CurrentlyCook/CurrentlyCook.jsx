import CurrentlyCookItems from "./CurrentlyCookItems";

const CurrentlyCook = ({currentlyCookItems}) => {
    return (
        <div>
            <CurrentlyCookItems
                currentlyCookItems={currentlyCookItems}
            ></CurrentlyCookItems>
        </div>
    );
};

export default CurrentlyCook;