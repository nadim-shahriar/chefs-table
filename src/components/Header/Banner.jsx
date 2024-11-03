

const Banner = () => {
    return (
        <div className="h-[600px] bg-[url('/banner.png')] rounded-3xl mb-[100px]" >
            <div className="flex flex-col justify-center items-center text-white  text-center rounded-3xl h-full bg-gradient-to-t from-[#150B2BE5]">
                <div className="space-y-5 ">
                    <h1 className="text-[52px] font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                    <p className="text-lg">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                </div>
                <div className="flex gap-6 mt-10 ">
                    <button className="bg-[#0BE58A] text-black py-5 px-6 rounded-full font-semibold hover:bg-green-200">Explore Now</button>
                    <button className="border py-5 px-6 rounded-full font-semibold hover:bg-gray-50 hover:text-black">Our Feedback</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;