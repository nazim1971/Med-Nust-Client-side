import Slider from "./Slider";

const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl">Your Trusted Pharmacy Store</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, voluptatibus?
                    </p>
                </div>
                <div>
                    <Slider/>
                </div>
            </div>
        </div>
    );
};

export default Banner;