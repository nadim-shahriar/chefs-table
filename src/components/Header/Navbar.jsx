import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
    return (
        // Navbar
        <div className="flex justify-between my-[50px]">
            <h1 className="text-3xl font-bold">Recipe Calories</h1>
            <div className="flex gap-12 text-[#150B2BB2]">
                <button className="hover:text-black">Home</button>
                <button className="hover:text-black">Recipes</button>
                <button className="hover:text-black">About</button>
                <button className="hover:text-black">Search</button>
            </div>
            <div className="flex items-center gap-6">
                <div className="bg-gray-200 flex items-center rounded-[30px] gap-2 px-6 py-3">
                    <CiSearch />
                    <input className="bg-gray-200" placeholder="Search" type="text" name="" id="" />
                </div>
                <button className="bg-[#0BE58A] p-3 rounded-full">
                    <VscAccount />
                </button>
            </div>
        </div>
        
    );
};

export default Navbar;