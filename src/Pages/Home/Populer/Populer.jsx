import Title from "../../../components/Title";


const Populer = () => {
    return (
        <div>
            <Title title={'Populer Brand'} />

            <div className="grid grid-cols-3  md:grid-cols-5 gap-8">
                <img className="h-32"  src="https://i.ibb.co/M9395jC/beximco.png" alt="Populer Brand Logo" />
                <img className="h-32" src="https://i.ibb.co/Y7kw46T/healthcare.jpg" alt="Populer Brand Logo" />
                <img className="h-32" src="https://i.ibb.co/64hcQJZ/incepta.jpg" alt="Populer Brand Logo" />
                <img className="h-32" src="https://i.ibb.co/CwZWj5T/opsonin.png" alt="Populer Brand Logo" />
                <img className="h-32" src="https://i.ibb.co/LCJKsYQ/populer.jpg" alt="Populer Brand Logo" />
                <img className="h-32" src="https://i.ibb.co/vcngj86/rediant.png" alt="Populer Brand Logo" />
                <img className="h-32" src="https://i.ibb.co/kxMkptg/renata.webp" alt="Populer Brand Logo" />
                <img className="h-32" src="https://i.ibb.co/6Z9rxvs/SKF.png" alt="Populer Brand Logo" />
                <img className="h-32" src="https://i.ibb.co/tHDcf6V/square.jpg" alt="Populer Brand Logo" />
            </div>
        </div>
    );
};

export default Populer;